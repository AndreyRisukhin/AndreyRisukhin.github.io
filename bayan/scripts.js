document.addEventListener('DOMContentLoaded', function() {
    const guestbookForm = document.getElementById('guestbook-form');
    const messagesDiv = document.getElementById('messages');

    guestbookForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        const location = document.getElementById('location').value;

        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';

        const nameP = document.createElement('p');
        nameP.textContent = `Name: ${name}`;
        messageDiv.appendChild(nameP);

        const messageP = document.createElement('p');
        messageP.textContent = `Message: ${message}`;
        messageDiv.appendChild(messageP);

        if (location) {
            const locationP = document.createElement('p');
            locationP.textContent = `Location Suggestion: ${location}`;
            messageDiv.appendChild(locationP);
        }

        messagesDiv.appendChild(messageDiv);

        guestbookForm.reset();
    });
});
