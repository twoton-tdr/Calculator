let previousValue; //to store the value when adding the next number
let currentValue; //to store the current value and answer

const calculatorScreen = document.querySelector("input");

calculatorScreen.addEventListener("keypress",(event)=>{
    const num= '0123456789';

    if(!num.includes(event.key)){
        //to prevent from inputing alphabets and other charecters
        event.preventDefault();
    }
})

const numpad = document.querySelectorAll(".num");

for(let i = 0;i<numpad.length;i++){
    //setting up numpad
    numpad[i].addEventListener("click",(event)=>{
        calculatorScreen.value+=event.target.innerHTML;
    })
}

const dot = document.querySelector("#dot");

dot.addEventListener("click",(e)=>{
    //this function is used to prevent entering "." more than once
    if(!calculatorScreen.value.includes(".")){
        calculatorScreen.value+=e.target.innerHTML;
    }
})

const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click",()=>{
    calculatorScreen.value="";
    previousValue = '';
    currentValue = '';
})