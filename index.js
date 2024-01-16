const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const showCompletedCheckbox = document.getElementById('showCompleted');

addTaskButton.addEventListener('click', addTask);

showCompletedCheckbox.addEventListener('change', () => renderTasks());

const tasks = [];
//(text, completed, deleted)

function addTask() {
    //get the user input
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    //create new task
    const newTask = {text: taskText, completed: false, deleted: false};
    tasks.push(newTask);

    //reset the value in the input
    taskInput.value = '';
    console.log(tasks);
   renderTasks();
}

function renderTasks() {
    console.log(tasks);
    // reset the task list
    taskList.innerHTML= '';
    const showCompleted = showCompletedCheckbox.checked;
    //iterate over the tasks array
    for (let i = 0; i< tasks.length; i++) {
        const {text, completed, deleted} = tasks[i];
        if(!deleted && (showCompleted || !completed)) {
        // create list item
            const li = document.createElement('li');
        //checkbox + span + button
            li.innerHTML = `
                <input type="checkbox" ${completed ? 'checked' : ''}>
                <span class="task ${completed ? 'completed' : ''}">${text}</span>
                <button class="delete">Delete</button>
            `
            //add event listeners
            const deleteButton = li.querySelector('.delete');
            deleteButton.addEventListener('click', () => deleteTask(i));

            const checkbox = li.querySelector("input[type='checkbox']");
            checkbox.addEventListener('change', () => toggleCompletion(i));
            //append li
            taskList.appendChild(li);
        }
    } 
}

function deleteTask(index) {
    tasks[index].deleted = true;
    renderTasks();

}

function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}