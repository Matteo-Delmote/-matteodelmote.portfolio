document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const responseMsg = document.querySelector('.form-response');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const action = form.action;
    try {
      const response = await fetch(action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        responseMsg.textContent = "✅ Message envoyé avec succès !";
        form.reset();
      } else {
        responseMsg.textContent = "❌ Une erreur est survenue, réessayez.";
      }
    } catch (error) {
      responseMsg.textContent = "❌ Une erreur est survenue, réessayez.";
    }
  });
});