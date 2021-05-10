"use strict";

const book = document.querySelector('.book');
const bookControl = document.querySelector('.book__control');

function fontChange(el) {
	el.preventDefault();

	if (el.target.dataset.size === 'big') {
		book.classList.add('book_fs-big');
		book.classList.remove('book_fs-small');
	} else if (el.target.dataset.size === 'small') {
		book.classList.add('book_fs-small');
		book.classList.remove('book_fs-big');
	} else {
		book.classList.remove('book_fs-big');
		book.classList.remove('book_fs-small');
	}

	for (let b of document.querySelectorAll('.font-size')) {
		b.classList.remove('font-size_active');
	}

	el.target.classList.add('font-size_active');

}

for (let b of bookControl.children) {
	b.addEventListener('click', fontChange);
}