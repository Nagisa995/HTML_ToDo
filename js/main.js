function deleteTask(event) {
    let task = event.currentTarget;
    let block = task.parentNode;
    block.remove();
}
function changeStatus(event) {
    let btn = event.currentTarget;
    let block = btn.parentNode;
    if (block.classList.contains('checkboxDone')) {
        block.classList.remove('checkboxDone');
        btn.classList.remove('btnBigDone');
    }
    else {
        block.classList.add('checkboxDone');
        btn.classList.add('btnBigDone');
    }
}

function createTask(text) {
    let taskBlock = document.createElement('div');
    taskBlock.classList.add('checkbox');
    taskBlock.classList.add('coordinate');
    let btnChange = document.createElement('button');
    btnChange.classList.add('btnBig');
    btnChange.addEventListener('click', changeStatus);
    let task = document.createElement('p');
    task.textContent = text;
    let btnDel = document.createElement('button');
    btnDel.classList.add('delete');
    btnDel.addEventListener('click', deleteTask);
    taskBlock.append(btnChange);
    taskBlock.append(task);
    taskBlock.append(btnDel);
    return taskBlock;
}

function addTask(event) {
    event.preventDefault();
    let form = event.currentTarget;
    let input = form.firstElementChild;
    let text = input.value;
    if(text=='') return;
    if (input.id === 'HIGH') {
        showListHigh.append(createTask(text));
    }
    else {
        showListLow.append(createTask(text));
    }
    return;
}

let btn = document.querySelectorAll('button.delete');
for (let elem of btn) {
    elem.addEventListener('click', deleteTask);
}
btn = document.querySelectorAll('button.btnBig');
for (let elem of btn) {
    elem.addEventListener('click', changeStatus);
}
btn = document.querySelectorAll('form');
for (let elem of btn) {
    elem.addEventListener('submit', addTask);
}
