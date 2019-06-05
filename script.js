const ham = document.querySelector('.nav-box');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('#menu-close');
const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const img = document.querySelector('.image-slider');
const menuLinks = document.querySelectorAll('.menu a');
let num = 1;

menuLinks.forEach((node) => {
	node.addEventListener('click', function() {
		ham.classList.remove('ham-open');
	})
})

ham.addEventListener('click', function() {
	ham.classList.add('ham-open');
})

menuClose.addEventListener('click', function() {
	ham.classList.remove('ham-open');
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

