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
    message = message.replace(/\n/g, '<br>');
    message = message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    messageText.innerHTML = message;
    messageElement.appendChild(messageText);

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    return messageText; // Devuelve el span para poder actualizarlo con streaming
}

function handleUserInput() {
    const message = userInput.value.trim();
    if (!message) return;

    // Agrega el mensaje del usuario
    addMessage(message, true);

    const botMessageText = addMessage("...", false); // Mensaje vacío que se llenará con el stream

    fetch('http://127.0.0.1:5000/response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message })
    })
    .then(response => {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let partialMessage = "";

        function readStream() {
            reader.read().then(({ done, value }) => {
                if (done) return;

                // Decodifica el chunk recibido
                const chunk = decoder.decode(value, { stream: true });
                
                // Procesa cada línea del chunk
                const lines = chunk.split('\n');
                for (const line of lines) {
                    // Si la línea comienza con "data: ", extraemos solo el contenido
                    if (line.startsWith('data: ')) {
                        partialMessage += line.substring(6); // Quitamos "data: "
                    } else if (line.trim()) {
                        // Si no es un evento data pero tiene contenido, lo añadimos también
                        partialMessage += line;
                    }
                }

                // Actualiza el mensaje en la UI
                botMessageText.innerHTML = partialMessage.replace(/\n/g, '<br>');
                chatMessages.scrollTop = chatMessages.scrollHeight;

                readStream(); // Continúa leyendo el stream
            });
        }

        readStream();
    })
    .catch(error => {
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
