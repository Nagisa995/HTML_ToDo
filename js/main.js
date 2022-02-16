let operator = '', previousNumber = 0;

function addNumber() {
    if (calcScreen.textContent === '0' || calcScreen.textContent == previousNumber||calcScreen.textContent==='Error')
        calcScreen.textContent = this.textContent;
    else {
        if (calcScreen.textContent.length < 6)
            calcScreen.textContent += this.textContent;
    }
}

function operation() {
    if(operator===''||previousNumber == calcScreen.textContent)
    previousNumber = calcScreen.textContent;
    else
    result();
    operator=this.id;
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
    if(calcScreen.textContent==='')calcScreen.textContent=0;   
}

function test(){
    alert(this.id);
}

sub.addEventListener('click',operation);
sum.addEventListener('click',operation);
mult.addEventListener('click',operation);
div.addEventListener('click',operation);
let k=document.querySelectorAll('div.block_item');
for(let elem of k){
elem.addEventListener('click',addNumber);    
}
del.removeEventListener('click',addNumber);
del.addEventListener('click',Delete);
CLEAR.addEventListener('click',clearScreen);
RESULT.addEventListener('click',result);