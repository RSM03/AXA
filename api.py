from flask import Flask, jsonify, request, render_template, send_from_directory, Response
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
import ollama
import json
import os
from dotenv import load_dotenv
from jinja2 import Environment, FileSystemLoader
import os
from datetime import datetime
import pdfkit
import PyPDF2
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
import difflib
import unicodedata
import re
import pandas as pd
import random

load_dotenv()
eden = os.getenv('EDEN')

messages = []

app = Flask(__name__)
CORS(app, resources={
    r"/response": {"origins": "*"}
})

# Ruta para servir la carpeta completa
@app.route('/<path:filename>')
def serve_bodegas(filename):
    return send_from_directory('templates/www.axa.es', filename)

@app.route('/')
def bodegas_index():
    return send_from_directory('templates/www.axa.es', 'index.html')

@app.route('/chat')
def home():
    return render_template('chat.html')

def get_text(path):
    with open(path, "rb") as file:
        reader = PyPDF2.PdfReader(file)
        pages_text = [reader.pages[i].extract_text() for i in range(len(reader.pages))]
        pages_text = '\n'.join(pages_text)
    return pages_text

def agregar_espacios(texto):
    # Reemplaza ". " por "." (para casos donde ya hay un espacio)
    texto = re.sub(r'(\.|:) ', r'\1 ', texto)
    # Reemplaza "." por ". " (para casos donde no hay espacio)
    texto = re.sub(r'(\.|:)(?! )', r'\1 ', texto)
    return texto

def ask_gpt(message):
    global eden
    headers = {
        "Authorization": f"Bearer {eden}",
    }

    url = "https://api.edenai.run/v2/text/chat/stream"
    payload = {
        "providers": ["openai/gpt-4o-mini"],
        "text": message,
        "chatbot_global_action": "Chatbot Assistant in AXA (Insurance Company)",
        "temperature": 0.2,
        "max_tokens": 2000,
    }

    response = requests.post(url, json=payload, headers=headers, stream=True)

    for line in response.iter_lines():
        if line:
            decoded_line = line.decode("utf-8")
            decoded_line = agregar_espacios(decoded_line)
            chunk = f"data: {json.loads(decoded_line)['text']}\n\n"
            yield chunk.encode("utf-8")  # Convierte a bytes

def ask_gpt_simple(message):
    global eden
    headers = {
        "Authorization": f"Bearer {eden}",
    }

    url = "https://api.edenai.run/v2/text/chat"
    payload = {
        "providers": ["openai/gpt-4o-mini"],
        "text": message,
        "chatbot_global_action": "Chatbot Assistant in AXA (Insurance Company)",
        "temperature": 0.1,
        "max_tokens": 200,
    }

    response = requests.post(url, json=payload, headers=headers, stream=True)
    data = json.loads(response.content)

    return data["openai/gpt-4o-mini"]["generated_text"]

@app.route('/response', methods=['POST'])
def answer_message():
    global messages
    message = request.json.get('message')

    pdfs = [f"'{name}'" for name in os.listdir('Productos AXA')]
    pdfs = ', '.join(pdfs)

    prompt = f'''
Eres un asistente en un chat de AXA que tiene que elegir en que pdf buscar para responder la pregunta de un usuario.

El formato de salida tiene que ser un json con clave 'filename' y valor el nombre del archivo.

En caso de que no haya ningún pdf aparentemente asociado devolver como valor 'No file'. Solo hacer esto si estás seguro de que la info no está en ningún archivo.

Estos son los nombres de los pdf:
{pdfs}

Estos son los mensajes previos del chat:
'''
    prompt+= '\n'.join([f"- {x['role']}: {x['message']}" for x in messages])
    prompt+= f'\nEsta es la pregunta del usuario:\n{message}'

    print(prompt)
    response = ask_gpt_simple(prompt)
    patron = r'```json\s+(.*?)\s+```'
    resultado = re.search(patron, response, re.DOTALL)

    json_contenido = json.loads(resultado.group(1))
    filename = json_contenido["filename"]
    print(filename)

    try:
        text = get_text(path = "Productos AXA/"+filename)
    except Exception as e:
        text = None
        print(e)

    prompt = f'Eres un asistente en un chat de AXA que tiene que responder al usuario sobre lo que pida.\n\n'
    if text:
        prompt += f'Información relevante para el caso:\n{text}\n\n'
    prompt += f'Estos son los mensajes previos del chat:\n'
    prompt +='\n'.join([f"- {x['role']}: {x['message']}" for x in messages])
    prompt += f'Consulta del usuario:\n{message}'

    print(prompt)
    
    def generate():
        response_chunks = []
        for chunk in ask_gpt(message):
            response_chunks.append(chunk.decode('utf-8').replace('data: ','').strip('\n') if isinstance(chunk, bytes) else chunk)
            yield chunk
        
        # Guardar la respuesta completa
        full_response = ''.join(response_chunks)
        messages.append({'role':'user','message':message})
        messages.append({'role':'bot','message':full_response})
    
    return Response(generate(), content_type='text/event-stream')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)