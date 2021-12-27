//Theme Toggler
let themeTogglerSm = document.getElementById('theme-toggler-sm');
let themeTogglerMd = document.getElementById('theme-toggler-md');
let screenWidth = window.screen.width

//Hidding Uncessary Theme Togglers
function hideToggler  {
	if (screenWidth < 768) {
		themeTogglerMd.style.display='none';
		themeTogglerSm.style.display='block';
	} else {
		themeTogglerMd.style.display='block';
		themeTogglerSm.style.display='none';
	}
}
window.addEventListener('load', hideToggler);
window.addEventListener('resize', hideToggler);


//Swichting Icons When Theme is Changed
themeTogglerSm.onclick = function(){
	if (themeTogglerSm.classList.contains('bi-sun')){
		themeTogglerSm.classList.remove('bi-sun');
		themeTogglerSm.classList.add('bi-moon');
	}
}
themeTogglerMd.onclick = function(){
	if (themeTogglerMd.classList.contains('bi-sun')){
		themeTogglerMd.classList.remove('bi-sun');
		themeTogglerMd.classList.add('bi-moon');
	}
}
