// Question 1
// Create a simple to-do list application using HTML, CSS and JavaScript. 
// Users should be able to take tasks, mark tasks as completed and remove tasks from the list in javascript


// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Event listener for adding a task
addTaskButton.addEventListener("click", addTask);

// Event listener for completing or removing a task
taskList.addEventListener("click", taskAction);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="complete-button">Complete</button>
            <button class="remove-button">Remove</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Function to complete or remove a task
function taskAction(event) {
    const target = event.target;
    if (target.classList.contains("complete-button")) {
        const taskItem = target.parentElement;
        taskItem.classList.toggle("completed");
    } else if (target.classList.contains("remove-button")) {
        const taskItem = target.parentElement;
        taskList.removeChild(taskItem);
    }
}
