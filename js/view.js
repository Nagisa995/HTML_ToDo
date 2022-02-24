//определяем кнопку на которое произошло событие
export function currentTarget(event) {
    return event.currentTarget;
}
//ищем блок задачи
function parent(target) {
    return target.parentNode;
}
//Первый элемент блока
export function firstChild(elem) {
    return elem.firstElementChild;
}
//Смена статуса задачи в базовом хранилище
export function setStatus(btn, taskStatus) {
    baseTask[btn.nextElementSibling.textContent].status = taskStatus;
}
//функция для установки задания в активное состояние
function setTaskActive(block, btn) {
    block.classList.remove('checkboxDone');
    btn.classList.remove('btnBigDone');
    setStatus(btn, 'Active');
}
//функция для отметки выполненного задания
export function setTaskDone(block, btn) {
    block.classList.add('checkboxDone');
    btn.classList.add('btnBigDone');
    setStatus(btn, 'Done');
}
//функция добавления задания на экран
export function showList(list, text, elem) {
    list.append(createTask(text));
    baseTaskDone(list, elem);
}
//функция удаления задачи
export function deleteTask(event) {
    let task = currentTarget(event);
    let block = parent(task);
    block.remove();
    delete baseTask[task.previousElementSibling.textContent];
}
//функция смены статуса задачи
export function changeStatus(event) {
    let btn = currentTarget(event);
    let block = parent(btn);
    let taskDone = !block.classList.contains('checkboxDone')
    if (taskDone) {
        setTaskDone(block, btn);
    }
    else {
        setTaskActive(block, btn);
    }
}
//функция создания задания
export function createTask(text) {
    let taskBlock = document.createElement('div');
    taskBlock.setAttribute('class', 'checkbox coordinate');
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
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, quae!': {
        priority: 'HIGH',
        status: 'Active',
    },
    'Lorem, ipsum dolor.': {
        priority: 'HIGH',
        status: 'Done',
    },
    'Lorem ipsum, dolor sit amet consectetur': {
        priority: 'LOW',
        status: 'Active',
    },
    'Lorem ipsum, dolor |_(-_-)_/': {
        priority: 'LOW',
        status: 'Done',
    },
}
//Запись новой задачи в базу
export function createBaseTask(base, task, value) {
    base[task] = {};
    base[task].priority = value;
    base[task].status = 'Active';
};
//Смена статуса выполненной базовой задачи
export function baseTaskDone(list, elem) {
    if (elem.status === 'Done') {
        let block_Task = list.lastElementChild;
        let marker = firstChild(block_Task);
        setTaskDone(block_Task, marker);
    }
}
//очистка строки ввода
export function clearInput(input) {
    return (input.value = "");
}