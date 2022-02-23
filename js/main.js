import {
    currentTarget,
    baseTask,
    createTask,
    showList,
} from './view.js';

for (let task in baseTask) {
    if (baseTask[task] === 'HIGH') {
        showListHigh.append(createTask(task));
    }
    else {
        showListLow.append(createTask(task));
    }
}

function addTask(event) {
    event.preventDefault();
    let form = currentTarget(event);
    let input = form.firstElementChild;
    let priority = input.id;
    let task = input.value;
    if (task == '') return;
    if (priority === 'HIGH') {
        showList(showListHigh, task);
    }
    else {
        showList(showListLow, task);
    }
    input.value = "";
    baseTask[task] = priority;
    return;
}

let btn = document.querySelectorAll('form');
for (let elem of btn) {
    elem.addEventListener('submit', addTask);
}