const tasksList = [
    { id: "1", text: "synthesize", completed: true },
    { id: "2", text: "override", completed: false },
    { id: "3", text: "index", completed: true },
    { id: "4", text: "compress", completed: false },
    { id: "5", text: "compress", completed: false },
    { id: "6", text: "override", completed: true },
    { id: "7", text: "generate", completed: true }
];

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

function renderTasks(tasks) {
    const ul = document.querySelector('ul')

    for (let task of tasksList) {
        let li = createListItem(task)
        ul.appendChild(li)
    }

}
renderTasks(tasksList);