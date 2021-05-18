const hasTooltip = Array.from(document.querySelectorAll(`.has-tooltip`));
const tooltip = document.createElement(`div`);
tooltip.classList.add(`tooltip`);

hasTooltip.forEach((el, i) => {
	el.addEventListener(`click`, (elem) => {
		if (el.nextSibling === tooltip) {
			tooltip.classList.toggle(`tooltip_active`);
		} else {
			el.insertAdjacentElement(`afterend`, tooltip);

			tooltip.classList.add(`tooltip_active`);
			tooltip.textContent = el.title;
			tooltip.style.left = `${el.getBoundingClientRect().left + 20}px`;
			tooltip.style.top = `${el.getBoundingClientRect().top + 20}px`;

		}
		elem.preventDefault();
	});
});