document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', addTask);

    function addTask(event) {
        event.preventDefault();

        const taskName = document.getElementById('taskName').value;
        const dueDate = document.getElementById('dueDate').value;

        if (taskName.trim() === '') {
            alert('Task name cannot be empty');
            return;
        }

        const task = createTaskElement(taskName, dueDate);
        taskList.appendChild(task);

        taskForm.reset();
    }

    function createTaskElement(taskName, dueDate) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const taskInfoDiv = document.createElement('div');
        taskInfoDiv.innerHTML = `<input type="text" value="${taskName}" disabled>
                                <input type="date" value="${dueDate}" disabled>`;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.innerHTML = `<button onclick="editTask(this)">Edit</button>
                                <button onclick="deleteTask(this)">Delete</button>
                                <button onclick="markAsDone(this)">Done</button>`;

        taskDiv.appendChild(taskInfoDiv);
        taskDiv.appendChild(buttonsDiv);

        return taskDiv;
    }
});

function editTask(button) {
    const taskDiv = button.closest('.task');
    taskDiv.classList.add('editing');

    const inputs = taskDiv.querySelectorAll('input');
    inputs.forEach(input => input.disabled = false);
}

function deleteTask(button) {
    const taskDiv = button.closest('.task');
    taskDiv.remove();
}

function markAsDone(button) {
    const taskDiv = button.closest('.task');
    taskDiv.style.backgroundColor = '#c1f0c1';
}
