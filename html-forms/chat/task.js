const chat = document.querySelector(".chat-widget");
const widgetInput = document.querySelector(".chat-widget__input");
const messages = document.getElementById("chat-widget__messages");
const answers = [
	"Где ваша совесть?",
	"Кто тут?",
	"Все операторы заняты",
	"Не мешайте у нас обед",
	"Идите в другой магазин",
	"Ваша настойчивость поражает"
];


function returnAnswers() {
	for (let k = 0; k < answers.length; k++) {
		return answers[Math.floor(Math.random() * (answers.length - k))];
	}
}

widgetInput.addEventListener("keyup", (event) => {

	if (event.key === "Enter") {
		const date = new Date();
		messages.innerHTML += `
    <div class="message message_client">
<div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
<div class="message__text">${event.target.value}</div>
    </div>
<div class="message">
<div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
<div class="message__text">${returnAnswers()} 😈</div>
</div>
`;
		widgetInput.value = '';
	}

});
chat.addEventListener("click", () => chat.classList.add("chat-widget_active"));