// Select necessary DOM elements
const newTaskInput = document.getElementById('newTask');
const addButton = document.querySelector('.add-btn');
const taskList = document.querySelector('.task-list');

// Function to add a new task
function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new task item
    const newTaskItem = document.createElement('li');

    // Create the span to display the task
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    newTaskItem.appendChild(taskSpan);

    // Create the input field for editing
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.placeholder = 'Edit task';
    newTaskItem.appendChild(editInput);

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => deleteTask(newTaskItem));
    newTaskItem.appendChild(deleteButton);

    // Create the save button
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.classList.add('save-btn');
    saveButton.addEventListener('click', () => saveTask(newTaskItem));
    newTaskItem.appendChild(saveButton);

    // Append the new task to the list
    taskList.appendChild(newTaskItem);

    // Clear the input field
    newTaskInput.value = '';
}

// Function to delete a task
function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
}

// Function to save an edited task
function saveTask(taskItem) {
    const editInput = taskItem.querySelector('input[type="text"]');
    const taskSpan = taskItem.querySelector('span');

    if (editInput.value.trim() !== '') {
        taskSpan.textContent = editInput.value.trim();
        editInput.value = '';
    } else {
        alert('Please enter a valid task to save!');
    }
}

// Add event listener to the Add button
addButton.addEventListener('click', addTask);

// Optional: Allow pressing Enter to add a task
newTaskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
