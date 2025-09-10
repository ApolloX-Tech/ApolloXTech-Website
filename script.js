// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple form handler
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for reaching out! We will get back to you shortly.');
  e.target.reset();
});
