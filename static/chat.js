const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const fileList = document.getElementById('file-list');
const fileInput = document.getElementById('file-input');

function addMessage(message, isUser) {
    const chatMessages = document.getElementById('chat-messages'); 
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(isUser ? 'user-message' : 'bot-message');
    
    const messageText = document.createElement('span');
    
    // Formateamos el mensaje siempre
    message = formatMessage(message);
    messageText.innerHTML = message;
    messageElement.appendChild(messageText);

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    return messageText;
}

// Función para el formateo
function formatMessage(text) {
    // Reemplazar saltos de línea
    text = text.replace(/\n/g, '<br>');
    // Reemplazar texto en negrita
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Cursiva
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Código inline
    text = text.replace(/`(.*?)`/g, '<code>$1</code>');
    
    return text;
}

function handleUserInput() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    if (!message) return;

    // Agrega el mensaje del usuario
    addMessage(message, true);
    userInput.value = ''; // Limpiar el input

    const botMessageText = addMessage("...", false); // Mensaje inicial
    let accumulatedMessage = "";

    fetch('http://127.0.0.1:5000/response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message })
    })
    .then(response => {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        function readStream() {
            reader.read().then(({ done, value }) => {
                if (done) return;

                // Decodifica el chunk recibido
                const chunk = decoder.decode(value, { stream: true });
                
                // Procesa cada línea del chunk
                const lines = chunk.split('\n');
                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        accumulatedMessage += line.substring(6); // Quitamos "data: "
                    } else if (line.trim()) {
                        accumulatedMessage += line;
                    }
                }

                // Aplicamos el formateo en cada actualización
                botMessageText.innerHTML = formatMessage(accumulatedMessage);
                chatMessages.scrollTop = chatMessages.scrollHeight;

                readStream(); // Continúa leyendo el stream
            });
        }

        readStream();
    })
    .catch(error => {
        console.log(error);
        botMessageText.innerHTML = "Error al recibir la respuesta.";
    });
}

document.getElementById('send-button').addEventListener('click', (event) => {
    event.preventDefault();
    handleUserInput();
    userInput.value = '';
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
        userInput.value = '';
    }
});
