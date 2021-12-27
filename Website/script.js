//Theme Toggler
let themeTogglerSm = document.getElementById('theme-toggler-sm');
let themeTogglerMd = document.getElementById('theme-toggler-md');
let screenWidth = window.screen.width

//Hidding Uncessary Theme Togglers

while (screenWidth < 768) {
	themeTogglerMd.style.display='none'
	themeTogglerSm.style.display='block'
}

while (screenWidth == 768 || screenWidth > 768) {
	themeTogglerSm.style.display='none'
	themeTogglerMd.style.display='block'
}

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
