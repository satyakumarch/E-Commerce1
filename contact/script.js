function submitForm() {
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Display response
    var responseElement = document.getElementById('response');
    responseElement.innerHTML = `Thank you, ${name}! Your message has been received.`;

    // Clear form fields
    document.getElementById('contactForm').reset();
}
