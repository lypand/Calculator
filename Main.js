import { ClearButton } from './ClearButton';
import {NumericButton} from './NumericButton'; 
import { OperatorButton } from './OperatorButton';
import { SolveButton } from './SolveButton';

let numericButtons = []; 
let typingFirstNumber = true; 
let firstNumber = '';
let secondNumber = '';
let operator = ''; 
let numericText = ['1','2','3','4','5','6','7','8','9','0'];
let operators = ['/','*','+','-'];
let solve = ['='];
let clear = ['clear'];
customElements.define('custom-button', NumericButton, { extends: 'button' });
customElements.define('operator-button', OperatorButton, { extends: 'button' });
customElements.define('solve-button', SolveButton, { extends: 'button' });
customElements.define('clear-button', ClearButton, { extends: 'button' });

export let setup = function() {
    for(var text in numericText){
        document.body.appendChild(new NumericButton(numericText[text]));        
    }
    for(var operator in operators){
        document.body.appendChild(new OperatorButton(operators[operator]));        
    }
    for(var s in solve){
        document.body.appendChild(new SolveButton(solve[s]));        
    }
    for(var s in clear){
        document.body.appendChild(new ClearButton(clear[s]));        
    }
}

const numericChannel = new BroadcastChannel('numeric-channel');
numericChannel.addEventListener('message', (event) => {

    if(typingFirstNumber){
        firstNumber = firstNumber + event.data;
    }else{
        secondNumber = secondNumber + event.data;
    }
    document.getElementById('input').innerHTML = firstNumber + " " + operator + " " + secondNumber;
});

const operatorChannel = new BroadcastChannel('operator-channel');
operatorChannel.addEventListener('message', (event) => {
  typingFirstNumber = false; 
  operator = event.data;
  document.getElementById('input').innerHTML = firstNumber + " " + operator + " " + secondNumber;
});

const solveChannel = new BroadcastChannel('solve-channel');
solveChannel.addEventListener('message', (event) => {
    if(firstNumber !== '' && secondNumber !== '' && operator !== ''){
        document.getElementById('output').innerHTML = eval(firstNumber + " " +  operator + " " + secondNumber);
    }
});

const clearChannel = new BroadcastChannel('clear-channel');
clearChannel.addEventListener('message', (event) => {
    firstNumber = ''; 
    secondNumber = ''; 
    operator = ''; 
    typingFirstNumber = true; 
    document.getElementById('output').innerHTML = firstNumber + " " + operator + " " + secondNumber;
    document.getElementById('input').innerHTML = firstNumber + " " + operator + " " + secondNumber;

});


window.addEventListener('load', setup); 
