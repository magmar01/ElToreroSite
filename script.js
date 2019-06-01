const ham = document.querySelector('.nav-box');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('#menu-close');
const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const img = document.querySelector('.image-slider');
let num = 1;


ham.addEventListener('click', function() {
	ham.classList.add('ham-open');
	menu.style.marginLeft = '50px';
})

menuClose.addEventListener('click', function() {
	ham.classList.remove('ham-open');
	menu.style.marginLeft = '-700px';
})

leftArrow.addEventListener('click', function() {
	num--;
	if(num > 0) {
		img.style.backgroundImage = 'url(img/fam-' + num + '.jpeg)';
		console.log(num);
		console.log(img.style.backgroundImage);
	} else {
		num = 4;
		img.style.backgroundImage = 'url(img/fam-' + num + '.jpeg)';
	}
})

rightArrow.addEventListener('click', function() {
	num++;
	if(num <= 4) {
		img.style.backgroundImage = 'url(img/fam-' + num + '.jpeg)';
		console.log(num);
		console.log(img.style.backgroundImage);
	} else {
		num = 1;
		img.style.backgroundImage = 'url(img/fam-' + num + '.jpeg)';
	}	
})

// window.sr = ScrollReveal();

// sr.reveal('.logo-wrap', {
// 	duration: 2000
// });

// sr.reveal('.w1', {
// 	duration: 2000,
// 	origin: 'bottom'
// });

// sr.reveal('.w2', {
// 	duration: 3000,
// 	origin: 'bottom'
// });

// sr.reveal('.w3', {
// 	duration: 4000,
// 	origin: 'bottom'
// });

// sr.reveal('.hours-line-left', {
// 	duration: 1000,
// 	origin: 'left',
// 	distance: '200px'
// });

// sr.reveal('.hours-line-right', {
// 	duration: 1000,
// 	origin: 'right',
// 	distance: '200px'
// });

// sr.reveal('.contact-line', {
// 	duration: 1000,
// 	origin: 'bottom',
// 	distance: '250px'
// });

// sr.reveal('.burrito', {
// 	duration: 1000,
// 	origin: 'right',
// 	distance: '250px'
// });

// sr.reveal('.taco', {
// 	duration: 1000,
// 	origin: 'right',
// 	distance: '250px'
// });

// sr.reveal('.guac', {
// 	duration: 1000,
// 	origin: 'right',
// 	distance: '250px'
// });

// sr.reveal('.nachos', {
// 	duration: 1000,
// 	origin: 'bottom',
// 	distance: '250px'
// });

// sr.reveal('.hot', {
// 	duration: 1000,
// 	origin: 'left',
// 	distance: '250px'
// });

// sr.reveal('.back-to-top', {
// 	duration: 1000,
// 	origin: 'bottom',
// });

// sr.reveal('.btp-arrow', {
// 	duration: 1500,
// 	origin: 'top',
// 	distance: '250px'
// });
