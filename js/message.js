function sendMessage() {
    var userInput = document.getElementById("userInput");
    var message = userInput.value;
  
    if (message.trim() !== "") {
      var chatContainer = document.getElementById("chatContainer");
      var newMessage = document.createElement("div");
      newMessage.className = "message";
      newMessage.textContent = message;
  
      chatContainer.appendChild(newMessage);
      userInput.value = "";
    }
  }