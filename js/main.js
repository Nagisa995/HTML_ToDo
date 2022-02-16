let operator = '', previousNumber = 0;

function addNumber(number) {
    if (calcScreen.textContent === '0' || calcScreen.textContent == previousNumber||calcScreen.textContent==='Error')
        calcScreen.textContent = number;
    else {
        if (calcScreen.textContent.length < 6)
            calcScreen.textContent += number;
    }
}

function operation(operation) {
    if(operator===''||previousNumber == calcScreen.textContent)
    previousNumber = calcScreen.textContent;
    else
    result();
    operator=operation;
}

function result() {
    let resultCalc =
    {
        sum: +previousNumber + (+calcScreen.textContent),
        sub: previousNumber - calcScreen.textContent,
        mult: previousNumber * calcScreen.textContent,
        div: previousNumber / calcScreen.textContent,
    };
    let solution = resultCalc[operator];
    if (!isFinite(solution)) {
        clearScreen();
        calcScreen.textContent='Error';
        return;
    }
    previousNumber = solution;
    calcScreen.textContent = solution;
    operator='';
}

function clearScreen(){
    calcScreen.textContent='0';
    operator = '';
    previousNumber = 0;  
}

function Delete(){
    calcScreen.textContent=calcScreen.textContent.slice(0,-1);   
}