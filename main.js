const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-menu')

navToggle.addEventListener('click', () => {
	navMenu.classList.toggle('active')
})

document.addEventListener('click', e => {
	if (
		e.target.id != 'toggle' &&
		navMenu.classList.contains('active') &&
		!e.target.classList.contains('nav-menu')
	) {
		navMenu.classList.toggle('active')
	}
})
