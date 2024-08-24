const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
 event.preventDefault(); // Preventdefault form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;  
    // Send the form data to a server using AJAX or other methods
    // For example, you could send an email or store the data in a database

    alert("Your message has been sent successfully!");
});