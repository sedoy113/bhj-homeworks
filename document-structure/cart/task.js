const controlDec = Array.from(document.querySelectorAll(`.product__quantity-control_dec`));
const controlInc = Array.from(document.querySelectorAll(`.product__quantity-control_inc`));
const productAdd = Array.from(document.querySelectorAll(`.product__add`));
const quantityValue = Array.from(document.querySelectorAll(`.product__quantity-value`));
const cartProducts = document.querySelector(`.cart__products`);
const cart = document.querySelector(`.cart`);
const product = Array.from(document.querySelectorAll(`.product`));
let remove = Array.from(document.querySelectorAll(`.cart__product-remove`));
controlDec.forEach((el, i) => {
	el.addEventListener(`click`, () => {
		if (quantityValue[i].textContent > 1) {
			--quantityValue[i].textContent;
		}
	});
});
controlInc.forEach((el, i) => {
	el.addEventListener(`click`, () => quantityValue[i].textContent++);
});
productAdd.forEach((el, i) => {
	el.addEventListener(`click`, () => {
		function actionProduct() {
			cartProducts.insertAdjacentHTML(`beforeend`, `<div class="cart__product" data-id="${product[i].dataset.id}">
    <img class="cart__product-image" src="${product[i].querySelector(`img`).src}">
    <div class="cart__product-count">${product[i].querySelector(`.product__quantity-value`).textContent}</div>
    <div class="cart__product-remove">&times</div>
		</div>`);

		}
		if (cartProducts.children.length === 0) {
			cart.classList.remove(`cart-none`);
			actionProduct();

		} else {
			const cartId = Array.from(cartProducts.querySelectorAll(`.cart__product`));
			const id = cartId.findIndex(elem => elem.dataset.id === product[i].dataset.id);
			if (id > -1) {
				cartId[id].querySelector(`.cart__product-count`).textContent = Number(quantityValue[i].textContent) + Number(cartId[id].querySelector(`.cart__product-count`).textContent);
			} else {
				actionProduct();

			}
		}
		cartProducts.lastChild.querySelector(`.cart__product-remove`).addEventListener(`click`, (e) => {
			e.target.closest(`.cart__product`).remove();
		})


	});
});