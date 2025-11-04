
(function () {
  emailjs.init("2gaki5sLPZMn8-SbA");
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = this;
  const name = form.elements['user_name'].value;
  const email = form.elements['user_email'].value;
  const message = form.elements['message'].value;

  emailjs.send('service_x2x1yqa', 'template_zk8zsvc', {
    from_name: name,
    from_email: email,
    message: `someone visited your secondary portfolio website and has sent something \n\nSender Name: ${name}\n\nSender Email: ${email}\n\nMessage: ${message}\n\n`,
    to_email: 'develops.anand@gmail.com'
  }).then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (err) => {
      alert("Failed to send message. Try again.");
    });
});
