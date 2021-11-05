//For Dark Mode
let themeToggler = document.getElementById('theme-toggler');
let themeIcon = document.getElementById('theme-icon');


themeToggler.onclick = function(){
	if (themeIcon.classList.contains('bi-sun')){
		themeIcon.classList.remove('bi-sun');
		themeIcon.classList.add('bi-moon');
	}
	 
	
}


