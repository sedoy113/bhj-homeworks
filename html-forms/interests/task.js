Array.from(document.querySelectorAll('.interest__check')).forEach(item => {
	item.addEventListener('click', () => {
		let checkActive = item.closest('.interest').querySelector('.interests_active');
		if (item.checked && checkActive) {
			checkActive.querySelectorAll('.interest__check').forEach(k => {
				k.checked = true;
			})
		} else if (item.checked === false && checkActive) {
			checkActive.querySelectorAll('.interest__check').forEach(k => {
				k.checked = false;
			})
		}

	})
})