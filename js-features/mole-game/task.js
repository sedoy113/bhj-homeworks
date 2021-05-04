'use strict'

	(() => {
		const inputs = document.querySelectorAll('div > .hole');
		for (let i = 0; i < inputs.length; i++) {
			inputs[i].addEventListener("click", myFunction);
		}
		function myFunction() {
			const dead = document.getElementById("dead");
			const lost = document.getElementById("lost");
			if (dead.textContent <= 8 & lost.textContent <= 3) {
				if (this.className == "hole hole_has-mole") {
					dead.textContent++ + 1;
				} else {
					lost.textContent++ + 1;
				}
			} else
				if (dead.textContent >= 8) {
					alert('Вы одержали победу');
					dead.textContent = 0;
					lost.textContent = 0;
				} else if (lost.textContent >= 3) {
					alert('Увы не повезло');
					dead.textContent = 0;
					lost.textContent = 0;
				}
		}
	})();