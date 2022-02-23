import {
    currentTarget,
    baseTaskDone,
    baseTask,
    showList,
    createBaseTask,
} from './view.js';

for (let task in baseTask) {
    if (baseTask[task].priority === 'HIGH') {
        showList(showListHigh, task);
        baseTaskDone(showListHigh,baseTask[task]);
    }
    else {
        showList(showListLow, task);
        baseTaskDone(showListLow,baseTask[task]);
    }
}

function addTask(event) {
    event.preventDefault();
    let form = currentTarget(event);
    let input = form.firstElementChild;
    let priorityValue = input.id;
    let task = input.value;
    if (task == '') return;
    if (priorityValue === 'HIGH') {
        showList(showListHigh, task);
    }
    else {
        showList(showListLow, task);
    }
    input.value = "";
    createBaseTask(baseTask, task, priorityValue);
    return;
}

let btn = document.querySelectorAll('form');
for (let elem of btn) {
    elem.addEventListener('submit', addTask);
}