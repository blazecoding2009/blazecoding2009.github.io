document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect the form data
        const subject = document.getElementById('contactSubject').value;
        const message = document.getElementById('contactMessage').value;

        // Create the mailto link
        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=arnnav0kudale@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

        // Open Gmail in a new tab
        window.open(mailtoLink, '_blank');
    });
});
