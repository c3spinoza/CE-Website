//HTML Document
let doc = document.getElementById('doc'); 
//Sytem Theme
let darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
//Theme Toggler
let themeToggler = document.getElementById('theme-toggler');


//Setting Theme Acccording to System Theme
darkTheme.addEventListener('change', function(){
	if (darktheme.matches) {
		//Dark Theme 
		
		//Change Colors for Text & Cackgrounds
		doc.classList.add('theme-dark');
		//Change color of Collapse Toggler
		
		//Change Color of Logo 
		
		//Change to Moon Icon 
		themeToggler.classList.remove('bi-sun');
		themeToggler.classList.add('bi-moon');
	} else {
		//Light Theme
    
    //Change Colors for Text & Cackgrounds
		doc.classList.add('theme-light');
		//Change color of Collapse Toggler
		
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
		
		//Change Color of Logo 
		
		//Change to Moon Icon 
		themeToggler.classList.remove('bi-sun');
		themeToggler.classList.add('bi-moon');
	} else {
		//Light Theme
    
    //Change Colors for Text & Cackgrounds
		doc.classList.add('theme-light');
		//Change color of Collapse Toggler
		
		//Change Color of Logo 
		
		//Change to Moon Icon 
		themeToggler.classList.remove('bi-moon');
		themeToggler.classList.add('bi-sun');
	}
}
