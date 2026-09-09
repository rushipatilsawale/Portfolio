const roles = [
    "AI & Data Science Undergraduate",
    "Full Stack Developer",
    "Aspiring AI & ML Engineer"
];

const typingText = document.getElementById("typing-text");

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const deletingSpeed = 60;
const pauseAfterTyping = 1500;
const pauseAfterDeleting = 500;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        // Add one character
        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        // Finished typing
        if (characterIndex === currentRole.length) {

            setTimeout(() => {
                isDeleting = true;
                typeEffect();
            }, pauseAfterTyping);

            return;
        }

        setTimeout(typeEffect, typingSpeed);

    } else {

        // Remove one character
        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        // Finished deleting
        if (characterIndex === 0) {

            isDeleting = false;

            roleIndex++;

            // Go back to first role
            if (roleIndex === roles.length) {
                roleIndex = 0;
            }

            setTimeout(typeEffect, pauseAfterDeleting);

            return;
        }

        setTimeout(typeEffect, deletingSpeed);
    }
}

typeEffect();