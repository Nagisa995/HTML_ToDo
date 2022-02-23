import {
    baseTask,
    createTask,
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
    let form = event.currentTarget;
    let input = form.firstElementChild;
    let block = input.id;
    let text = input.value;
    if (text == '') return;
    if (block === 'HIGH') {
        showListHigh.append(createTask(text));
    }
    else {
        showListLow.append(createTask(text));
    }
    input.value = "";
    baseTask[text] = block;
    return;
}

let btn = document.querySelectorAll('form');
for (let elem of btn) {
    elem.addEventListener('submit', addTask);
}
