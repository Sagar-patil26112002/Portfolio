document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('submit-btn');
  const modalBody = document.getElementById('modal-body');
  const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));

  submitButton.addEventListener('click', function () {

    const name = document.getElementById('name-field').value;
    const email = document.getElementById('email-field').value;
    const subject = document.getElementById('subject-field').value;
    const message = document.getElementById('message-field').value;

    const alertMessage = `
      <strong>Name:</strong> ${name}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Subject:</strong> ${subject}<br>
      <strong>Message:</strong> ${message}
    `;

    modalBody.innerHTML = alertMessage;
    confirmationModal.show();
  });
});