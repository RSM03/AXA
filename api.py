from flask import Flask, jsonify, request, render_template, send_from_directory, Response
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
import ollama
import json

eden = True
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

def ask_gpt(message):
    headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTc5NTJlN2MtNTE1MC00MTJhLTg4MjktNGE1YjQ0ODUzZTc2IiwidHlwZSI6ImFwaV90b2tlbiJ9.P3D906SbibDIxo9ZCFVXpAO391pS5Y9fQk-AiHWGT9I",
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
            chunk = f"data: {json.loads(decoded_line)['text']}\n\n"
            yield chunk.encode("utf-8")  # Convierte a bytes

@app.route('/response', methods=['POST'])
def answer_message():
    message = request.json.get('message')
    
    def generate():
        for chunk in ask_gpt(message):
            yield chunk  # Ya está en bytes
    
    return Response(generate(), content_type='text/event-stream')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)