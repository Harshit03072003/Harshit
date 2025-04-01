let tasks = [];

function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${task} 
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById("task-input");
    const task = taskInput.value.trim();

    if (task) {
        tasks.push(task);
        taskInput.value = "";
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}