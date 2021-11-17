// *** Set date ***
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// *** close links ***
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  linksContainer.classList.toggle('show-links');
});

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
// *** fixed navbar ***
window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
  if (scrollHeight > 800) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});
