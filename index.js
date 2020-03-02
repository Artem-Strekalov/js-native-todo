const tasksList = [
    { id: "1", text: "synthesize", completed: true },

];

/*Создаю новый тег и передаю в него значения из массива*/
function createListItem(task) {
    const label = document.createElement('label')
    label.innerHTML = task.text

    const button = document.createElement('button')
    button.className = 'destroy'

    const input = document.createElement('input')
    input.className = 'toogle'
    input.type = 'checkbox'
    input.checked = task.completed

    const div = document.createElement('div')
    div.className = 'view'

    div.appendChild(input)
    div.appendChild(button)
    div.appendChild(label)

    const li = document.createElement('li')
    li.appendChild(div)

    return li
}

function renderTasks() {
    const ul = document.querySelector('ul')

    for (let task of tasksList) {
        let li = createListItem(task)
        ul.appendChild(li)

    }


}
renderTasks();

/*id следующего объекта в массиве */
function newId() {
    let lastValueId = tasksList[tasksList.length - 1].id;
    let newLastValueId = Number(tasksList[tasksList.length - 1].id) + 1;
    return newLastValueId;
}
/* Добавляем таску  */
function addNewTask() {
    let input = document.getElementById('task');
    tasksList.push({ id: newId(), text: input.value, completed: true });
    renderTasks();
}