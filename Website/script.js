//HTML Document
let doc = document.getElementById('doc');
//Sytem Theme
let darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
//Theme Toggler
let themeToggler = document.getElementById('theme-toggler');
//Collapse Navabar Toggler
let collapseToggler = document.getElementById('collapse-toggler');
//Navbar Logo
let navbarLogo = document.getElementById('navbar-logo');
//Main Logo
let logo = document.getElementById('logo');


//Setting Theme Acccording to System Theme & Swichting Theme with Toggler
darkTheme.addEventListener('change', themeChange);
themeToggler.addEventListener('click', themeChange);
									
function themeChange() {
  if (darkTheme.matches || themeToggler.classList.contains('bi-sun')) {
    //Dark Theme

    //Change to Moon Icon
    themeToggler.classList.replace('bi-sun', 'bi-moon');
    //Change Colors for Text & Backgrounds
    doc.classList.replace('theme-light', 'theme-dark');
    //Change Color of Logo
    navbarLogo.src = "CE_DesignV2.svg";
    logo.src = "CE_DesignV2.svg";
  } else {
    //Light Theme

    //Change to Moon Icon
    themeToggler.classList.replace('bi-moon', 'bi-sun');
    //Change Colors for Text & Backgrounds
    doc.classList.replace('theme-dark', 'theme-light');
    //Change Color of Logo
    navbarLogo.src = "CE_DesignV1.svg";
    logo.src = "CE_DesignV1.svg";
  }
}
