document.addEventListener('keydown', function (event) {
    const dialogueContainer = document.getElementById('dialogueContainer');
    const dialogueText = document.getElementById('dialogueText');
    const characterImage = document.getElementById('characterImage');
    const instructionMessage = document.getElementById('instructionMessage');

    if (event.keyCode === 83) { // 'S' key

        const messages = [
            "This is it,\n in this timeline,\n you are alone",
        ];

        let currentMessageIndex = 0;
        let currentCharIndex = 0;

        function typeWriter() {
            if (currentMessageIndex < messages.length) {
                const message = messages[currentMessageIndex];
                if (currentCharIndex < message.length) {
                    const char = message.charAt(currentCharIndex);
                    if (char === '\n') {
                        dialogueText.innerHTML += '<br>';
                    } else {
                        dialogueText.textContent += char;
                    }
                    currentCharIndex++;
                    setTimeout(typeWriter, 50); 
                } else {
                    currentMessageIndex++;
                    currentCharIndex = 0;
                    setTimeout(typeWriter, 2000); 
                }
            } else {
                setTimeout(function () {
                    dialogueContainer.style.display = 'none';
                }, 5000); 
            }
        }

        characterImage.style.display = 'block';
        dialogueContainer.style.display = 'block';
        dialogueText.textContent = '';
        instructionMessage.style.display = 'none'; 
        typeWriter();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
        myButton.style.display = 'block';
    }
});