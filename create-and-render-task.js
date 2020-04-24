let tasksList = [];

function addLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(tasksList))
}

if (localStorage.getItem('todos')) {
    tasksList = JSON.parse(localStorage.getItem('todos'))
}
/*Создаю новый тег и передаю в него значения из массива*/
function createListItem(task) {
    const label = document.createElement('label')
    label.innerHTML = task.text

    const button = document.createElement('button')
    button.className = 'destroy'
    button.onclick = deleteTask;

    const input = document.createElement('input')
    input.className = 'toogle'
    input.type = 'checkbox'
    input.checked = task.completed
    input.onclick = toggleTask;

    const div = document.createElement('div')
    div.className = 'view'

    div.appendChild(input)
    div.appendChild(button)
    div.appendChild(label)

    const li = document.createElement('li')
    li.className = `todo ${task.completed ? "completed" : ""}`
    li.setAttribute("id", task.id);
    li.appendChild(div)
    return li
}

function renderTasks(tasks) {
    const ul = document.querySelector('ul')
    ul.innerHTML = '';
    for (let task of tasks) {
        let li = createListItem(task)
        ul.appendChild(li)

    }
    counter()
    showHideFooter()
    addLocalStorage()
}
renderTasks(tasksList);