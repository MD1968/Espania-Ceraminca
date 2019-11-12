function sendMail(contactForm) {
    emailjs.send("smtp_server", "silverheath", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "phone" : contactForm.phone.value,
        "notes": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
          window.open("emailSent.html", "_self");
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}