'use strict';

const links = document.querySelectorAll(".menu__link");
links.forEach(element => {
	element.onclick = clickMenu;
});

function clickMenu(el) {
	const link = el.target;
	const linkParent = link.parentElement;
	const menuSub = linkParent.querySelectorAll(".menu_sub");
	if (menuSub.length > 0) {
		menuSub.forEach(element => {
			element.classList.toggle("menu_active");
		})
		return false;
	}
}