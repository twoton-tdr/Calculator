let previousValue; //to store the value when adding the next number
let currentValue; //to store the current value and answer
let previousOperator;
let currentOperator;

const calculatorScreen = document.querySelector("input");
calculatorScreen.addEventListener("keypress",(event)=>{
    const num= '0123456789';

    if(!num.includes(event.key)){
        //to prevent from inputing alphabets and other charecters
        event.preventDefault();
    }
})

//setting up numpad
const numpad = document.querySelectorAll(".num");
for(let i = 0;i<numpad.length;i++){
    numpad[i].addEventListener("click",(event)=>{
        calculatorScreen.value+=event.target.innerHTML;
    })
}

//this function is used to prevent entering "." more than once
const dot = document.querySelector("#dot");
dot.addEventListener("click",(e)=>{
    if(!calculatorScreen.value.includes(".")){
        calculatorScreen.value+=e.target.innerHTML;
    }
})

//adding clear button function
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click",()=>{
    calculatorScreen.value="";
    previousValue = '';
    currentValue = '';
    previousOperator='';
    currentOperator='';
})

//plus or minus function
const negative = document.querySelector("#plusOrMinus");
negative.addEventListener('click',()=>{
    if(!calculatorScreen.value.includes('-'))
    calculatorScreen.value = '-'+calculatorScreen.value;
})
//listening to clicks from all operators
const operators = document.querySelectorAll(".operator");
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click',operation); 
}

function operation(){

    if(!calculatorScreen.value){
        console.log("nothing is in the input");
        return;
    }

    currentValue = calculatorScreen.value;
    calculatorScreen.value=''; //clearing screen
    currentOperator = this.textContent;

    if(!previousValue){
        if(currentOperator === '='){
            calculatorScreen.value = currentValue;
            return;
        }
        //checking valid previousvalue if no function will repeat after next input
        previousValue = currentValue;
        previousOperator=currentOperator;
        currentOperator = "";
        currentValue = "";
        return;
    }
    else{
        switch(previousOperator){
            case '+':addition(previousValue,currentValue)
            break;
            case '-': substraction(previousValue,currentValue)
            break;
            case 'x': multiplication(previousValue,currentValue)
            break;
            case '/': division(previousValue,currentValue)
            break;
            case '%': percentage(previousValue,currentValue)
            break;
        }
 
        previousValue = '';
        return;
    }


}

//backspace function
const del =  document.querySelector('#delete');
del.addEventListener('click',backSpace);

function addition(x,y){
    calculatorScreen.value = roundOff(Number(x)+Number(y));
    return;
}

function substraction(x,y){
    calculatorScreen.value = roundOff(Number(x)-Number(y));
    return;
}

function multiplication(x,y){
    calculatorScreen.value = roundOff(Number(x)*Number(y));
    return;
}
function division(x,y){
    calculatorScreen.value = roundOff(Number(x)/Number(y));
    return;
}

function percentage(x,y){
    const percent = (x/100)*y;
    calculatorScreen.value = roundOff(percent);
}
function roundOff(num){
    //to round off decimal point to a max of 5 decimals
    num*=100000;
    num = Math.round(num);
    num = num/100000;
    return num;
}



function backSpace(){
    let ArrayLength = calculatorScreen.value.length;
    ArrayLength-=1;
    if(ArrayLength>=0){
        calculatorScreen.value = calculatorScreen.value.slice(0,ArrayLength);
    }
}