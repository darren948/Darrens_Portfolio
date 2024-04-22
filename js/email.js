document.addEventListener("DOMContentLoaded", function() {
    // Send Email
    const msg = document.querySelector(".form-message");
    const loader = document.querySelector(".loader");

    // Initialize Email.js with your User ID
    emailjs.init("kYfkoaGzCYSz1enAH"); // Replace with your actual User ID

    // Contact Form Submission
    document.getElementById("send-message").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission
        loader.classList.add("show"); // Show loader
        emailjs.sendForm("service_gagdrj1", "template_zz4jo7c", "#contact-form")
            .then(function (response) {
                document.getElementById("contact-form").reset();
                loader.classList.remove("show"); // Hide loader
                msg.innerHTML = "<span class='success-msg'>Email Sent</span>";
                msg.classList.add("show");
                msg.style.backgroundColor = "green"; // Green background for success
                setTimeout(() => {
                    msg.classList.remove("show");
                    msg.innerHTML = ""; // Clear message after timeout
                }, 2000);
                console.log("SUCCESS!", response.status, response.text);
            }, function (error) {
                loader.classList.remove("show"); // Hide loader
                msg.innerHTML = "<span class='error-msg'>Error: Email not sent. Please try again later.</span>";
                msg.classList.add("show");
                msg.style.backgroundColor = "red"; // Red background for error
                console.error("FAILED...", error);
            });
    });
});
