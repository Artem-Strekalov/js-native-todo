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