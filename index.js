document.addEventListener('DOMContentLoaded', () => {
    const appointmentButton = document.getElementById('appointment-button');
    const formContainer = document.getElementById('form-container');
    const appointmentForm = document.getElementById('appointment-form');

    appointmentButton.addEventListener('click', () => {
        formContainer.style.display = 'flex';
    });

    appointmentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Here, we can add code to process the form data if needed

        // Redirect to the confirmation page
        window.location.href = 'confirmation.html';
    });
});

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const feedbackWrapper = document.getElementById('feedback-wrapper');
const feedbackCards = document.getElementById('feedback-cards');
const feedbackCard = document.querySelectorAll('.feedback-card');

let currentIndex = 0;
const cardWidth = feedbackCard[0].offsetWidth + 20; // Add margin space
const visibleCards = Math.floor(feedbackWrapper.offsetWidth / cardWidth);
const totalCards = feedbackCard.length;

function updateButtons() {
    next.disabled = currentIndex >= totalCards - visibleCards;
    prev.disabled = currentIndex <= 0;
}

next.addEventListener('click', () => {
    if (currentIndex < totalCards - visibleCards) {
        currentIndex++;
        feedbackCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
    updateButtons();
});

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        feedbackCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
    updateButtons();
});

window.addEventListener('resize', () => {
    updateButtons();
    feedbackCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
});

updateButtons();

