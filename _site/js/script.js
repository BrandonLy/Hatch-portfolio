var body = document.body;
var navToggle = document.getElementById('navToggle');
var mobileNav = document.getElementById('mobileNav');

navToggle.onclick = function() {
	if (mobileNav.classList.contains('show')) {
		mobileNav.classList.remove('show');
		mobileNav.classList.add('hide');
	} else {
		mobileNav.classList.remove('hide');
		mobileNav.classList.add('show');
	}
}