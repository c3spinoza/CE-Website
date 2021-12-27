//Theme Toggler
let themeToggler = document.getElementById('theme-toggler');

//Swichting Icons When Theme is Changed
themeToggler.onclick = function() {
  if (themeTogglerSm.classList.contains('bi-sun')) {
    themeTogglerSm.classList.remove('bi-sun');
    themeTogglerSm.classList.add('bi-moon');
  }
}
