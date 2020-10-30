document.title = "Dynamic JavaScript Calculator";

// Create the instruction div
var instructionDiv = document.createElement('div');
instructionDiv.setAttribute('class', 'black stuff-box shadowed');
document.body.appendChild(instructionDiv);

// Place beginning text
var headline = document.createElement('h1');
headline.textContent = 'JavaScript Calculator';
instructionDiv.appendChild(headline);
var para = document.createElement('p');
para.textContent = 'Create An Expression:';
instructionDiv.appendChild(para);

// Make input form
var inputForm = document.createElement('span');
instructionDiv.appendChild(inputForm);
var firstNum = document.createElement('input');
firstNum.setAttribute('type', 'number');
firstNum.setAttribute('placeholder', '12');
firstNum.setAttribute('id', 'firstNum');
inputForm.appendChild(firstNum);

var operand = document.createElement('select');
operand.setAttribute('id', 'operand');
inputForm.appendChild(operand);

for (var o of ['+', '-', '*', '/', '%', '**']) {
    var option = document.createElement('option');
    option.textContent = o;
    operand.appendChild(option);
}

var secondNum = document.createElement('input');
secondNum.setAttribute('id', 'secondNum');
secondNum.setAttribute('type', 'number');
secondNum.setAttribute('placeholder', '5');
inputForm.appendChild(secondNum);

var computeButton = document.createElement('input');
computeButton.setAttribute('type', 'button');
computeButton.setAttribute('value', 'Compute');
computeButton.setAttribute('id', 'compute');
inputForm.appendChild(computeButton);
inputForm.appendChild(document.createElement('br'));
var color = document.createElement('input');
color.setAttribute('type', 'color');
color.setAttribute('id', 'color');
inputForm.appendChild(color);
var span = document.createElement('span');
span.textContent = 'Color Of New Result <div>';
inputForm.appendChild(span);

var results = document.createElement('div');
document.body.appendChild(results);


// Code for the compute event.
const button = document.getElementById('compute');
button.addEventListener('click', displayResult);

function displayResult() {
    var a = Number(document.getElementById('firstNum').value);
    var b = Number(document.getElementById('secondNum').value);
    var o = document.getElementById('operand').value;
    var today = new Date();
    var now = today.toLocaleDateString() + ' ' + today.toLocaleTimeString();

    if (!a || !b ) {
        var div = document.createElement('div');
        div.setAttribute('class', 'red stuff-box');
        results.prepend(div);
        var para = document.createElement('p');
        para.textContent = ` ${now} Error! Missing One or More Operands!`;
        div.addEventListener('click', function (event) {
            this.remove();
        });
        div.appendChild(para);
    } else {
        var div = document.createElement('div');
        var color = document.getElementById('color').value;
        div.setAttribute('class', 'shaddowed stuff-box');
        div.setAttribute('style', `background-color: ${color}`);
        div.addEventListener('click', function (event) {
            this.remove();
        });
        results.prepend(div);

// Solve the expression
        var result
        if (o === '+') {
            result = a + b;
        } else if (o === '-') {
            result = a - b;
        } else if (o === '/') {
            result = a / b;
        } else if (o === '*') {
            result = a * b;
        } else if (o === '%') {
            result = a % b;
        } else if (o === '**') {
            result = a ** b;
        }
        var para = document.createElement('p');
        para.textContent = `${a} ${o} ${b} = ${result}`;
        div.appendChild(para);
    }
}

