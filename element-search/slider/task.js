'use strict';
const slides = document.querySelectorAll('.slider__item');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');

let slideNumber = 0;

arrowNext.onclick = function () {
	slideNumber++;
	for (let slide of Array.from(slides)) {
		slide.className = 'slider__item';
	}
	if (slideNumber >= slides.length) {
		slideNumber = 0;
	}
	slides[slideNumber].className = 'slider__item slider__item_active';
};

arrowPrev.onclick = function () {
	slideNumber--;
	for (let slide of Array.from(slides)) {
		slide.className = 'slider__item';
	}
	if (slideNumber < 0) {
		slideNumber = slides.length - 1;
	}
	slides[slideNumber].className = 'slider__item slider__item_active';
};