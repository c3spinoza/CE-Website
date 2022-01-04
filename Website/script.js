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


//Setting Theme Acccording to System Theme
darkTheme.addEventListener('change', function(){
	if (darktheme.matches) {
		//Dark Theme 
		
		//Change to Moon Icon 
		themeToggler.classList.replace('bi-sun', 'bi-moon');
		//Change Colors for Text & Backgrounds
		doc.classList.replace('theme-light','theme-dark');
		//Change color of Collapse Toggler
		collapseToggler.style.backgroundImage = "url("+"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 0.9)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E"+");";
		//Change Color of Logo 
		navbarLogo.src = "CE_DesignV2.svg";
		logo.src = "CE_DesignV2.svg";
	} else {
		//Light Theme
		
		//Change to Moon Icon 
		themeToggler.classList.replace('bi-moon', 'bi-sun');
		//Change Colors for Text & Backgrounds
		doc.classList.replace('theme-dark','theme-light');
		//Change color of Collapse Toggler
		collapseToggler.style.backgroundImage = "url("+"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0, 0.9)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E"+");";
		//Change Color of Logo 
		navbarLogo.src = "CE_DesignV1.svg";
		logo.src = "CE_DesignV1.svg";
	}
});



//Swichting Theme with Toggler
themeToggler.onclick = function(){
	if (themeToggler.classList.contains('bi-sun')){
		//Dark Theme 
		
		//Change to Moon Icon 
		themeToggler.classList.replace('bi-sun', 'bi-moon');
		//Change Colors for Text & Backgrounds
		doc.classList.replace('theme-light','theme-dark');
		//Change color of Collapse Toggler
		collapseToggler.style.backgroundImage = "url("+"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 0.9)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E"+");";
		//Change Color of Logo 
		navbarLogo.src = "CE_DesignV2.svg";
		logo.src = "CE_DesignV2.svg";
	} else {
		//Light Theme
		
		//Change to Moon Icon 
		themeToggler.classList.replace('bi-moon', 'bi-sun');
		//Change Colors for Text & Backgrounds
		doc.classList.replace('theme-dark','theme-light');
		//Change color of Collapse Toggler
		collapseToggler.style.backgroundImage = "url("+"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0, 0.9)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E"+");";
		//Change Color of Logo 
		navbarLogo.src = "CE_DesignV1.svg";
		logo.src = "CE_DesignV1.svg";
	}
}
