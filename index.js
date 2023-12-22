var taskInput = document.getElementById('taskInput');
var addTask = document.getElementById('addTask');
var taskList = document.getElementById('taskList');

addTask.addEventListener('click', addNewTask);

function addNewTask() {
    //get the user input
    var taskName = taskInput.value.trim();
    if (taskName === '') return;
    //create the element that represent the task
    var li = document.createElement('li');
    li.innerHTML = '<input type="checkbox">' + '<span class="task">' + taskName + '</span>' + '<button class="delete">Delete</button>'

    var deleteButton = li.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        li.remove();
    })
    //render this task in the task list.
    taskList.appendChild(li);
    //reset the value in the input
    taskInput.value = '';
}