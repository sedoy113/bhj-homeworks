'use strict';

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

function switchTabs(event) {

	for (let b of tabs) {
		b.className = 'tab';
	}
	event.target.className = 'tab tab_active';

	for (let b of tabContents) {
		b.className = 'tab__content';
	}
	const index = Array.from(tabs).indexOf(event.target);
	tabContents[index].className = 'tab__content tab__content_active';
};

for (let b of tabs) {
	b.addEventListener('click', switchTabs)
};