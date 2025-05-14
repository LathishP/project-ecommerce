export function setupContactForm() {
  const form = document.getElementById('contact-form');
  const sentMessage = document.getElementById('sent-message');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    sentMessage.style.display = 'block';
    form.reset();
  });
}
