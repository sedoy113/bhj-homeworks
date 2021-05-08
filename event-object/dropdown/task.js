'use strict';

const dropDownValue = document.querySelector('.dropdown__value');
const dropDownList = document.querySelector('.dropdown__list');
const hrefLinks = document.querySelectorAll('a');

for (let b of hrefLinks) {
	b.addEventListener('click', rename);
}

function show(event) {

	if (dropDownList.className === 'dropdown__list') {
		dropDownList.className = 'dropdown__list dropdown__list_active';
	} else {
		dropDownList.className = 'dropdown__list';
	}

}

function rename(event) {
	event.preventDefault();
	dropDownValue.textContent = event.target.textContent;
	dropDownList.className = 'dropdown__list';
}

dropDownValue.addEventListener('click', show);
