let randomNumber=parseInt(Math.random()*100+1);
const input=document.querySelector('#input');
const submit=document.querySelector('#submit');
const output=document.querySelector('.result');
const Values=document.querySelector('.previousValues');
const remain=document.querySelector('.remaining');
const start=document.querySelector('.start');
let previousValues=[];
let left=0;
remain.innerHTML=`Remaining guesses :- ${10-left}`;
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let GuessedValue=(input.value);
    // console.log(GuessedValue);
    validateInput(GuessedValue);
})

// Given input is valid or not
function validateInput(number){
    if(isNaN(number)){
        alert("Please write a valid input");
        input.value='';
    }else if(number<1 || number>100){
        alert("Number should be in range between 1 to 100");
        input.value='';
    }else{
         checkInput(number);
    }
}

// Given input is valid, but is this correct ??
function checkInput(number){
    previousValues.push(number);
    left++;
if(left<=10){
if(number<randomNumber){
//something should be displayed
output.innerHTML=`Guessed value is too low, which is equal to ${number}`
input.value='';
remain.innerHTML=`Remaining guesses :- ${10-left}`;
Values.innerHTML=`Your Guessed values :- ${previousValues}`;
}else if(number>randomNumber){
//something should be displayed
output.innerHTML=`Guessed value is too high, which is equal to ${number}`
input.value='';
remain.innerHTML=`Remaining guesses :- ${10-left}`;
Values.innerHTML=` ${previousValues},`;
}else{
    output.innerHTML=`Guessed value is correct, which is equal to random value ${number}`
    input.value='';
    remain.innerHTML=`Remaining guesses :- ${10-left}`;
    Values.innerHTML=`Your Guessed values :- ${previousValues}`;
}
}else{
    output.innerHTML=`You are out of move, correct value is ${randomNumber}`
    input.setAttribute('disabled','');
    start.innerHTML=`<form><input type="submit"></form>`
    start.addEventListener('click',(e)=>{
        input.removeAttribute('disabled');
        e.preventDefault();
        left=0;
        previousValues=[];
        remain.innerHTML=`Remaining guesses :- ${10-left}`;
        Values.innerHTML=`Your Guessed values :- ${previousValues}`;
        start.innerHTML=``;
        input.value='';
    })
}
}