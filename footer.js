/* Удаляем выполненные таски */
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