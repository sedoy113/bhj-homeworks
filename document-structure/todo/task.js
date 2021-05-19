const tasksList = document.querySelector('.tasks__list');

document.getElementById('tasks__add').addEventListener('click', (event) => {
	const taskInput = document.getElementById('task__input').value;
	if (taskInput.trim() !== '') {
		tasksList.insertAdjacentHTML('afterend',
			`<div class="task">
            <div class="task__title">
                ${taskInput}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);
		event.preventDefault();
		document.getElementById('task__input').value = '';
		document.querySelector('.task__remove').addEventListener('click', (elem) => {
			elem.target.closest(`.task`).remove();
		})
	}
	event.preventDefault();
})