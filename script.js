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
        //checking valid previousvalue if no function will repeat after next input
        previousValue = currentValue;
        
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
            
        }
        previousValue = '';
        return;
    }

    previousOperator=currentOperator;
    currentOperator = "";
    currentValue = "";
}


function addition(x,y){
    calculatorScreen.value =Number(x)+Number(y);
    return;
}

function substraction(x,y){
    calculatorScreen.value = Number(x)-Number(y);
    return;
}

function multiplication(x,y){
    calculatorScreen.value = Number(x)*Number(y);
    return;
}
function division(x,y){
    calculatorScreen.value = Number(x)/Number(y);
    return;
}