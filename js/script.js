function toggleMenu() {
  let toggle = document.querySelector('.toggle');
  let navigation = document.querySelector('.navigation');
  let main = document.querySelector('.main');
  
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
  main.classList.toggle('active');
}

function menuAccordion() {
  let subBtn = document.querySelector('.subMenu');
  let dropdown = document.querySelector('.dropdown');
  
  subBtn.classList.toggle('active');
  dropdown.classList.toggle('rotate');
}
