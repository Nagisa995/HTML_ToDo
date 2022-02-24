import {
    currentTarget,
    clearInput,
    baseTask,
    showList,
    createBaseTask,
    firstChild,
} from './view.js';

for (let task in baseTask) {
    if (baseTask[task].priority === 'HIGH') {
        showList(showListHigh, task, baseTask[task]);
    }
    else {
        showList(showListLow, task, baseTask[task]);
    }
}

function addTask(event) {
    event.preventDefault();
    let input = firstChild(currentTarget(event));
    let priorityValue = input.id;
    let task = input.value;
    let taskIsEmpty = ((task.split(' ').join('')) === '');
    if (taskIsEmpty) {
        clearInput(input);
        return;
    };
    createBaseTask(baseTask, task, priorityValue);
    if (priorityValue === 'HIGH') {
        showList(showListHigh, task, baseTask[task]);
    }
    else {
        showList(showListLow, task, baseTask[task]);
    }
    clearInput(input);
    return;
}

let btn = document.querySelectorAll('form');
for (let elem of btn) {
    elem.addEventListener('submit', addTask);
}