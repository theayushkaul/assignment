document.getElementById('greetBtn').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value;
    const greetingMessage = document.getElementById('greetingMessage');
    
    if (nameInput.trim() === "") {
        greetingMessage.classList.add('error');
        greetingMessage.textContent = "Please enter your name!";
    } else {
        greetingMessage.classList.remove('error');
        greetingMessage.textContent = `Hello, ${nameInput}! Welcome to our site!`;
    }
});
