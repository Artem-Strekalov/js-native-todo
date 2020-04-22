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
    li.className = `todo ${task.completed ? "completed" : ""}` /* разобрать эту строчку */
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

function newId() {
    if (tasksList.length == 0) {
        return '1'
    }
    /* Создал массив из id task */
    let newTaskId = tasksList.map(item => item.id)
        /* Нашел максимальный id */
    let maxId = Math.max.apply(null, newTaskId) + 1;
    maxId = String(maxId);
    return maxId;
}

/* Добавляем таску  */
function addNewTask() {
    let input = document.getElementById('taskInput');
    tasksList.push({ id: newId(), text: input.value, completed: false });
    renderTasks(tasksList);
    input.value = '';

}
/* Удаляем таску */
function deleteTask(event) {
    let id = event.target.parentNode.parentNode.id
    let newTasksList = tasksList.filter(task => task.id !== id)
    tasksList = newTasksList
    but.style.display = 'none';
    renderTasks(tasksList)
}
/* Изменяем значение checked */
function toggleTask(event) {
    let li = event.target.parentNode.parentNode;
    let newTasksList = tasksList.map(task => {
        if (task.id === li.id) {
            return ({ id: li.id, text: task.text, completed: !task.completed })
        }
        return task
    })
    but.style.display = 'block';
    tasksList = newTasksList
    renderTasks(tasksList)
}
/* счетчик */
function counter() {
    let count = tasksList.filter(task => !task.completed).length;
    let strong = document.getElementById('count')
    strong.innerHTML = count;
    if (count == tasksList.length) {
        but.style.display = 'none';
    }
}

function clearCompleted() {
    let newTaskList = tasksList.filter(item => !item.completed)
    tasksList = newTaskList
    renderTasks(tasksList)
}
/* Фильтр */
/* все таски */
function filterAll() {
    renderTasks(tasksList)
}
/* активыне таски */
function filterActive() {
    let newTaskList = tasksList.filter(item => !item.completed);
    renderTasks(newTaskList)
}
/* выполенные */
function filterCompleted() {
    let newTaskList = tasksList.filter(item => item.completed);
    renderTasks(newTaskList)
}

/* none/block footer */
function showHideFooter() {
    if (tasksList.length == 0) {
        footer.style.display = 'none'
    } else {
        footer.style.display = "block"
    }
}

function checkedUrl() {
    const hash = window.location.hash
    if (hash == '#/all') {
        filterAll()
    }
    if (hash == '#/active') {
        filterActive()
    }
    if (hash == '#/completed') {
        filterCompleted()
    }
}
checkedUrl()