"use strict";

const rotator = document.querySelectorAll('.rotator');

function random(min, max) {
	return min + Math.round(Math.random() * (max - min));
}

setInterval(function () {

	for (let b of rotator) {

		const rotatorRandom = random(0, b.children.length - 1);

		for (let g of b.children) {
			g.classList.remove('rotator__case_active');
			b.children[rotatorRandom].classList.add('rotator__case_active');
		}
	}

}, 600);