document.addEventListener('DOMContentLoaded', function() {
    const proceedBtn = document.getElementById('proceedBtn');

    proceedBtn.addEventListener('click', function() {
        // Here, you can add your form validation logic before proceeding.
        // For simplicity, let's just log a message.
        console.log('Proceed button clicked!');
        // Check if CVC is provided
        const cvcInput = document.querySelector('input[data-cvc]');
        if (cvcInput.value.trim() !== '') {
            // If CVC is provided, show success message
            showSuccessMessage();
        }
    });

    // Input masking
    const inputs = document.querySelectorAll('input[data-mask]');
    inputs.forEach(function(input) {
        const maskValue = input.getAttribute('data-mask');
        const maskLength = maskValue.length;

        input.addEventListener('input', function(event) {
            let value = event.target.value.replace(/\D/g, '');
            let maskedValue = '';

            for (let i = 0; i < maskLength; i++) {
                if (value.length > i) {
                    maskedValue += value[i] + (maskValue[i] === ' ' ? ' ' : '');
                } else {
                    break;
                }
            }

            event.target.value = maskedValue;
        });
    });

    // Function to show success message
    function showSuccessMessage() {
        const successMessage = document.createElement('div');
        successMessage.textContent = 'CVC Provided Successfully!';
        successMessage.classList.add('success-message');
        document.body.appendChild(successMessage);
        // Remove success message after 3 seconds
        setTimeout(function() {
            successMessage.remove();
        }, 3000);
    }
});
