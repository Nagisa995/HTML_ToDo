let operator = '', previousNumber = 0;

function screenSize(container) {
    if (container.length > 9) calcScreen.style.fontSize = '32px';
    else {
        if (container.length > 5) calcScreen.style.fontSize = '64px';
        else calcScreen.style.fontSize = '96px';
    }
}

function addNumber() {
    if(calcScreen.textContent === 'Error') return;
    if (calcScreen.textContent === '0' || calcScreen.textContent == previousNumber || calcScreen.textContent === 'Error')
        calcScreen.textContent = this.textContent;
    else calcScreen.textContent += this.textContent;
    screenSize(calcScreen.textContent);
}

function operation() {
    if(calcScreen.textContent === 'Error') return;
    if (operator === '')
        previousNumber = calcScreen.textContent;
    else 
        result();
    operator = this.id;
}

function result() {
    let resultCalc =
    {
        sum: +previousNumber + (+calcScreen.textContent),
        sub: previousNumber - calcScreen.textContent,
        mult: previousNumber * calcScreen.textContent,
        div: previousNumber / calcScreen.textContent,
    };
    if (calcScreen.textContent == '0' || operator === '') {
        clearScreen();
        calcScreen.textContent = 'Error';
        return;
    }
    let solution = resultCalc[operator];
    previousNumber = solution;
    calcScreen.textContent = solution;
    screenSize(calcScreen.textContent);
    operator = '';
}

function clearScreen() {
    calcScreen.textContent = '0';
    operator = '';
    previousNumber = 0;
}

function Delete() {
    if (calcScreen.textContent === 'Error') return;
    calcScreen.textContent = calcScreen.textContent.slice(0, -1);
    if (calcScreen.textContent === '') calcScreen.textContent = 0;
    screenSize(calcScreen.textContent);
}

let k = document.querySelectorAll('div.block_item');
for (let elem of k) {
    elem.addEventListener('click', addNumber);
}
del.removeEventListener('click', addNumber);
k = document.querySelectorAll('div.block_operation');
for (let elem of k) {
    elem.addEventListener('click', operation);
}
RESULT.removeEventListener('click', operation);
del.addEventListener('click', Delete);
CLEAR.addEventListener('click', clearScreen);
RESULT.addEventListener('click', result);
document.querySelector('div.block_zero').addEventListener('click', addNumber);