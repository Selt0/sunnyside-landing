const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-menu')

navToggle.addEventListener('click', e => {
	navMenu.classList.toggle('active')
})

document.addEventListener('click', e => {
	if (
		e.target.id != 'toggle' &&
		navMenu.classList.contains('active') &&
		!e.target.classList.contains('nav-menu')
	) {
		console.log('fired!')
		navMenu.classList.toggle('active')
	}
})
