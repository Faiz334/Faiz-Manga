
// Toggle nav
var toggle_menu = document.querySelector('.responsive-menu');
var menu = document.querySelector('.menu');
toggle_menu.onclick = function() {
  toggle_menu.classList.toggle('active');
  menu.classList.toggle('responsive')
}

// Darkmode
function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


// Animation Texte Home

const home = document.querySelector('#home');
const title = home.querySelector('h4');
const p1 = home.querySelector('#p1');



gsap.fromTo(title, { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 2.5, delay: 0.6, ease: 'power4.out' });
gsap.fromTo(p1, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, delay: 0.8, ease: 'power4.out' });

// Animation Texte Titre

const sections = document.querySelectorAll('#popular-manga, #a-propos');

sections.forEach(section => {
  const title1 = section.querySelector('h1');

  gsap.fromTo(title1, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1.5, delay: 0.8, ease: 'power4.out' });
});