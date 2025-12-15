document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const responseMsg = document.querySelector('.form-response');
  if (form) {
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
          responseMsg.style.color = '#4caf50';
          form.reset();
        } else {
          responseMsg.textContent = "❌ Une erreur est survenue, réessayez.";
          responseMsg.style.color = '#ff5252';
        }
      } catch (error) {
        responseMsg.textContent = "❌ Une erreur est survenue, réessayez.";
        responseMsg.style.color = '#ff5252';
      }
      responseMsg.style.opacity = 1;
      setTimeout(() => {
        responseMsg.style.opacity = 0;
      }, 4000);
    });
  }

  // Scroll fluide vers la section contact
  const contactBtn = document.querySelector('a[href="#contact"]');
  const contactSection = document.getElementById('contact');
  if (contactBtn && contactSection) {
    contactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});