// === DARK MODE TOGGLE ===
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    // Optional: save preference
    const isDark = document.documentElement.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Load preference on page load
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark-mode');
  }
}

// === CONTACT FORM VALIDATION ===
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('#name')?.value.trim();
    const email = contactForm.querySelector('#email')?.value.trim();
    const message = contactForm.querySelector('#message')?.value.trim();

    if (name && email && message) {
      document.getElementById('success-msg').innerText = "Message sent successfully!";
      contactForm.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
}

// === MOBILE NAV TOGGLE ===
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
