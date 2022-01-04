//HTML Document
let doc = document.getElementById('doc'); 
//Sytem Theme
let darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
//Theme Toggler
let themeToggler = document.getElementById('theme-toggler');
let collapseToggler = document.getElementById('collapse-toggler');


//Setting Theme Acccording to System Theme
darkTheme.addEventListener('change', function(){
	if (darktheme.matches) {
		//Dark Theme 
		
		//Change Colors for Text & Cackgrounds
		doc.classList.add('theme-dark');
		//Change color of Collapse Toggler
		collapseToggler.style.backgroundImage = "url("+"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 0.9)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E"+");";
		//Change Color of Logo 
		
		//Change to Moon Icon 
		themeToggler.classList.remove('bi-sun');
		themeToggler.classList.add('bi-moon');
	} else {
		//Light Theme
		
		//Change Colors for Text & Cackgrounds
		doc.classList.add('theme-light');
		//Change color of Collapse Toggler
		collapseToggler.style.backgroundImage = "url("+"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0, 0.9)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E"+");";
		//Change Color of Logo 
		
		//Change to Moon Icon 
		themeToggler.classList.remove('bi-moon');
		themeToggler.classList.add('bi-sun');
	}
});



//Swichting Theme with Toggler
themeToggler.onclick = function(){
	if (themeToggler.classList.contains('bi-sun')){
		//Dark Theme 
		
		//Change Colors for Text & Cackgrounds
		doc.classList.add('theme-dark');
		//Change color of Collapse Toggler
		collapseToggler.style.backgroundImage = "url("+"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 0.9)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E"+");";
		//Change Color of Logo 
		
		//Change to Moon Icon 
		themeToggler.classList.remove('bi-sun');
		themeToggler.classList.add('bi-moon');
	} else {
		//Light Theme
		
		//Change Colors for Text & Cackgrounds
		doc.classList.add('theme-light');
		//Change color of Collapse Toggler
		collapseToggler.style.backgroundImage = "url("+"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0, 0.9)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E"+");";
		//Change Color of Logo 
		
		//Change to Moon Icon 
		themeToggler.classList.remove('bi-moon');
		themeToggler.classList.add('bi-sun');
	}
}
