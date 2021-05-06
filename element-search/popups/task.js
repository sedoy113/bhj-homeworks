'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const modalMain = document.getElementById('modal_main');
	const modalSuccess = document.getElementById('modal_success');
	const modalClose = document.querySelectorAll('.modal__close_times');
	const showBtn = document.querySelector('.show-success');

	modalMain.classList.add('modal_active');

	function closeModal(el) {
		const modal = el.target.closest('.modal');
		modal.classList.remove('modal_active');
	}

	function showModal() {
		modalMain.classList.remove('modal_active');
		modalSuccess.classList.add('modal_active');
	}

	modalClose.forEach((el) => {
		el.addEventListener('click', closeModal);
	});
	showBtn.addEventListener('click', showModal);
});