function screenSize(container) {
    if (container.length > 8) calcScreen.style.fontSize = '32px';
    else {
        if (container.length > 5) calcScreen.style.fontSize = '64px';
        else calcScreen.style.fontSize = '96px';
    }
}

function setMarker(event) {
    let lastEvent = document.querySelector('div.Event');
    if (lastEvent !== null) lastEvent.classList.remove('Event');
    event.currentTarget.classList.add('Event');
    console.log(lastEvent);
}

function addNumber(event) {
    if (calcScreen.textContent === 'Error') return;
    let lastEvent = document.querySelector('div.Event');
    if (calcScreen.textContent === '0' || lastEvent.classList.contains('block_operation'))
        calcScreen.textContent = event.currentTarget.textContent;
    else
        calcScreen.textContent += +event.currentTarget.textContent;
    screenSize(calcScreen.textContent);
    setMarker(event);
}

function procedure(event) {  
    let lastEvent = document.querySelector('div.Event');
    if (lastEvent.classList.contains('block_operation')) {
        if (lastEvent.textContent!=='=') {
            operator = event.currentTarget.id;
            setMarker(event);
            return;
        }
    }
    if (previousNumber !== ''&&lastEvent.textContent!==backspace.textContent) calculation(event);
    previousNumber = calcScreen.textContent;
    operator = event.currentTarget.id;
    setMarker(event);
}

function calculation(event) {
    let lastEvent = document.querySelector('div.Event');
    if (lastEvent.classList.contains('block_operation')) return;
    if (calcScreen.textContent === '0' || calcScreen.textContent === 'Error') {
        calcScreen.textContent = 'Error';
        return;
    }
    const resultCalc =
    {
        sum: +previousNumber + (+calcScreen.textContent),
        sub: previousNumber - calcScreen.textContent,
        mult: previousNumber * calcScreen.textContent,
        div: previousNumber / calcScreen.textContent,
    };
    calcScreen.textContent = resultCalc[operator];
    screenSize(calcScreen.textContent);
    setMarker(event);
};

function clearScreen(event){
    calcScreen.textContent='0';
    previousNumber='';
    operator=undefined;
    screenSize(calcScreen.textContent);
    setMarker(event);
}

function backSpace(event){
    if (calcScreen.textContent === 'Error') {
        clearScreen(event);
        return};
    calcScreen.textContent = calcScreen.textContent.slice(0, -1);
    if (calcScreen.textContent === '') calcScreen.textContent = 0;
    screenSize(calcScreen.textContent);
    setMarker(event);
}

let previousNumber= '' , operator;
console.log(operator);

let button = document.querySelectorAll('div.block_item');
for (let elem of button) {
    elem.addEventListener('click', addNumber);
}
document.querySelector('div.block_zero').addEventListener('click', addNumber);
backspace.removeEventListener('click', addNumber);
backspace.addEventListener('click', backSpace);
button = document.querySelectorAll('div.block_operation');
for (let elem of button) {
    elem.addEventListener('click', procedure);
}
RESULT.removeEventListener('click', procedure);
RESULT.addEventListener('click', calculation);
CLEAR.addEventListener('click', clearScreen);