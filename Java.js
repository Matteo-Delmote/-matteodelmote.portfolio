document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const responseMsg = document.querySelector('.form-response');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      // Construction du mailto
      const subject = encodeURIComponent('Contact depuis le portfolio');
      let body = '';
      for (const [key, value] of formData.entries()) {
        body += `${key}: ${value}\n`;
      }
      const mailto = `mailto:matteodelmote59@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      responseMsg.textContent = "✅ Votre client mail va s'ouvrir pour envoyer le message.";
      responseMsg.style.color = '#4caf50';
      responseMsg.style.opacity = 1;
      setTimeout(() => {
        responseMsg.style.opacity = 0;
      }, 4000);
      form.reset();
    });
  }
  const contactBtn = document.querySelector('a[href="#contact"]');
  const contactSection = document.getElementById('contact');
  if (contactBtn && contactSection) {
    contactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});