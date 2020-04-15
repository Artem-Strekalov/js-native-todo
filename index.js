let tasksList = [
    { id: "1", text: "synthesize", completed: false },
    { id: "2", text: "override", completed: false },
    { id: "3", text: "index", completed: false },
    { id: "4", text: "compress", completed: false },
    { id: "5", text: "compress", completed: false },
    { id: "6", text: "override", completed: false },
    { id: "7", text: "generate", completed: false }
];
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
}
renderTasks(tasksList);

function newId() {
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
    footerHide()
}
/* Удаляем таску */
function deleteTask(event) {
    let id = event.target.parentNode.parentNode.id
    let newTasksList = tasksList.filter(task => task.id !== id)
    tasksList = newTasksList
    but.style.display = 'none';
    renderTasks(tasksList)
    footerHide()
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
    footerHide()
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
function footerHide() {
    if (tasksList.length == 0) {
        footer.style.display = 'none'
    } else {
        footer.style.display = "block"
    }
}