document.addEventListener("DOMContentLoaded", function() {
    var chatbotMessages = document.getElementById("chatbot-messages");
    var userInput = document.getElementById("user-input");

    function sendMessage() {
        var userMessage = userInput.value.trim();
        if (userMessage !== "") {
            // Display user message
            displayMessage(userMessage, "user");

            // Process user message (you can customize this part)
            var response = getChatbotResponse(userMessage);

            // Display chatbot response
            displayMessage(response, "chatbot");

            // Clear user input
            userInput.value = "";
        }
    }

    function displayMessage(message, sender) {
        var messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);
        messageElement.textContent = message;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getChatbotResponse(message) {
        // You can implement your chatbot logic here and return a response
        // This is just a basic example
        return "Thank you for your message: " + message;
    }

    userInput.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            sendMessage();
        }
    });
});
