// Simple form validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (!name || !email) {
                event.preventDefault();
                alert('Please fill out both fields.');
            } else {
                alert('Form submitted successfully!');
            }
        });
    }
});

