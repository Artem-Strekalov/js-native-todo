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