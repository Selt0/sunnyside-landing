# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./images/Sunnyside%20Landing.gif)

### Links

- Live Site URL: [https://selt0.github.io/sunnyside-landing/](https://selt0.github.io/sunnyside-landing/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- pseudo elements
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I wanted to challenge myself and build the website without using a framework. I also wanted to practice using CSS grid so I used it creating the 2 column section.

This project also gave me more experience working with SVG elements. At first I had used the SVG element through an img tag but realized it was too small so I placed the SVG code within html and used <code>viewbox</code> to increase the size of the logo. I also had used SVG for the footer social icons and used CSS to changed the fill color on hover.

There are few elements that needed to be styled using psedo-classes. For the links in the 2 column, at first I thought I could add a border bottom and offset it but when that didn't work, I tried using a text-decoration underline and strike-through but it wasn't quite the same. What ended up working out was using <code>::after</code>. I absolutely positioned the element over the link. I then had to center the psuedo element on mobile using media queries.

The next pseudo element was the triangle with the nav menu. I used <code>::before</code> and borders to create the triangle just under the toggle. I used JavaScript to add an event listener to toggle the nav menu and also hide it if the user clicked outside while the menu was active.

```html
<svg
	viewBox="0 0 120 40"
	width="300"
	height="50"
	xmlns="http://www.w3.org/2000/svg"
></svg>
```

```css
/* SVG elements */
.footer-socialLinks svg {
	width: 20px;
	height: 20px;
	fill: #2c7566;
	cursor: pointer;
}

.footer-socialLinks svg:hover {
	fill: #fff;
}

/* working with CSS grid */
.col-2-grid {
	max-width: 1500px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(2, minmax(400px, 1fr));
	grid-template-rows: repeat(3, minmax(340px, 1fr));
	row-gap: 0;
}

/* using ::after to create the style on the 'learn more' link */
.underline::after {
	content: '';
	position: absolute;
	bottom: -0.1rem;
	left: -8px;
	right: 0;
	width: 120px;
	height: 0.6rem;
	z-index: -1;
	border-radius: 0.5rem;
	transition: 0.35s;
}

/* Had to center the style on mobile */
@media screen and (width < 710px) {
	.underline::after {
		margin-left: -61px;
		left: 50%;
	}
}

/* Created the traingle over the nav menu on mobile */
.active::before {
	content: '';
	height: 0;
	width: 0;
	border-left: 30px solid transparent;
	border-bottom: 35px solid #fff;
	top: -34px;
	right: 0;
	position: absolute;
}
```

```js
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
```

### Continued development

I'm having trouble doing an animation effect on the nav menu on mobile. I don't think the menu popping abruptly on the user is a good experience. Adding a short transition can smoothen it out for the user. I'll need to read up on how to properly create this effect.

### Useful resources

- [Triangle pointer - stack overflow](https://stackoverflow.com/questions/65458153/adding-triangle-pointer-to-the-center-of-bottom-of-nav-item-menu) - This helped me get started on creating the triangle. I adjusted the styles to fit my design

## Author

- Website - [Michael Martinez](https://michael-martinez.netlify.app/)
- Twitter - [@MMocomochi](https://twitter.com/MMocomochi)
