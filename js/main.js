import {
    currentTarget,
    clearInput,
    baseTask,
    showList,
    createBaseTask,
    firstChild,
    addGroupEvent,
} from './view.js';

addGroupEvent('form', 'submit', addTask);

for (let task in baseTask) {
    let priorityValue = baseTask[task].priority;
    if (priorityValue === 'HIGH') {
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
    try {
        let taskIsEmpty = ((task.split(' ').join('')) === '');
        if (taskIsEmpty) {
            throw new Error('Empty task');
        }
        createBaseTask(baseTask, task, priorityValue);
        if (priorityValue === 'HIGH') {
            showList(showListHigh, task, baseTask[task]);
        }
        else {
            showList(showListLow, task, baseTask[task]);
        }
    } catch (err) {
        alert(`${err.message}`);
    } finally {
        clearInput(input);
    }
    return;
}