// Hamburger Menu

const hamburger = document.querySelector('.hamburger');
const navUL = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navUL.classList.toggle('open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    navUL.classList.remove('open');
    hamburger.classList.remove('active');
  }
});

// Directory Grid/List Toggle
const gridBtn = document.getElementById('gridView');
const listBtn = document.getElementById('listView');
const membersSection = document.getElementById('members');

gridBtn.addEventListener('click', () => {
  membersSection.classList.add('grid');
  membersSection.classList.remove('list');
});
listBtn.addEventListener('click', () => {
  membersSection.classList.add('list');
  membersSection.classList.remove('grid');
});

// Footer Date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
