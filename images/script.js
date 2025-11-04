// Tab switching function in About section
function openTab(tabName) {
  const tabLinks = document.querySelectorAll(".tab-links");
  const tabContents = document.querySelectorAll(".tab-contents");

  tabLinks.forEach(link => link.classList.remove("active-link"));
  tabContents.forEach(tab => tab.classList.remove("active-tab"));

  document.querySelector(`[onclick="openTab('${tabName}')"]`).classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}
//Certificate modal functionality
// Simple fade-in animation on scroll
const cards = document.querySelectorAll('.certificate-card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight - 100) {
      card.classList.add('visible');
    }
  });
});
const scriptURL = '<SCRIPT URL>'
const form = document.forms['submit-to-google-sheet']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
});

// Smooth scroll for navbar links
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
