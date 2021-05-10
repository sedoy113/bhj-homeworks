"use strict";

const addReveal = document.querySelectorAll('.reveal');

function showScroll(el) {
	const viewportHeight = window.innerHeight;

	for (let element of addReveal) {

		const showElement = element.getBoundingClientRect().top;
		if (showElement < viewportHeight) {
			element.classList.add('reveal_active');
		} else {
			element.classList.remove('reveal_active');
		}
	}
}

document.addEventListener('scroll', showScroll);