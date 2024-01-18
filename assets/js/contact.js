/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault() // Fix: Added parentheses to execute the function

    // serviceID - templateID - #form - publickey
    emailjs.sendForm('portfolio', 'template_7gytos7', '#contact-form', 'wYhsCyAgGSdHqSWnG') // Fix: Changed sendFrom to sendForm and corrected the user ID
        .then(() => {
            // Show sent messages
            contactMessage.textContent = 'Message sent successfully ✅';

            // Remove message after 5 seconds
            setTimeout(() => {contactMessage.textContent = '';}, 5000);

            // Clear Input fields
            contactForm.reset();
        }, () => {
            //Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail);
