const body = document.body;
const iconLight = document.querySelector('.icon-light');
const iconDark = document.querySelector('.icon-dark');
const vanta = document.querySelector('#vanta');

function changeMode() {
  body.classList.toggle("dark-blue");
  iconLight.classList.toggle("no-display");
  iconDark.classList.toggle("no-display");
  vanta.classList.toggle("no-display");
}


