//функция удаления
export function deleteTask(event) {
    let task = event.currentTarget;
    let block = task.parentNode;
    block.remove();
    delete baseTask[task.previousElementSibling.textContent];
}
//функция смены статуса
export function changeStatus(event) {
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
//функция создания задания
export function createTask(text) {
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
//Изначальная база задач
export const baseTask = {
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, quae!': 'HIGH',
    'Lorem, ipsum dolor.': 'HIGH',
    'Lorem ipsum, dolor sit amet consectetur': 'LOW'
}