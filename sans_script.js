document.addEventListener('keydown', function (event) {
    const dialogueContainer = document.getElementById('dialogueContainer');
    const dialogueText = document.getElementById('dialogueText');
    const characterImage = document.getElementById('characterImage');
    const instructionMessage = document.getElementById('instructionMessage');

    if (event.keyCode === 83) { // 'S' key

        const messages = [
            "So you chose to remain in the present. \nI must say it's not a very pleasant timeline you want to be in.\n So you will continue to make the most of it here. " ,
            "Just like we agreed upon,\n you are stuck here.",
            "There's no turning back from this choice. \n But... y'know...\nYOU ALREADY KNEW THAT! " ,
            "Click c to continue"
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
                    setTimeout(typeWriter, 50); // Typing speed
                } else {
                    currentMessageIndex++;
                    currentCharIndex = 0;
                    setTimeout(typeWriter, 1000); // Delay between messages
                }
            } else {
                setTimeout(function () {
                    dialogueContainer.style.display = 'none';
                }, 3000); // Hide after 3 seconds
            }
        }

        characterImage.style.display = 'block';
        dialogueContainer.style.display = 'block';
        dialogueText.textContent = '';
        instructionMessage.style.display = 'none'; // Hide instruction message
        typeWriter();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
        myButton.style.display = 'block';
    }
});