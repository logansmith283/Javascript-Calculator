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

// Add first number input
var firstNum = document.createElement('input');
firstNum.setAttribute('type', 'number');
firstNum.setAttribute('placeholder', '12');
firstNum.setAttribute('id', 'firstNum');
inputForm.appendChild(firstNum);

// Add the drop down for the operator
var operator = document.createElement('select');
operator.setAttribute('id', 'operator');
inputForm.appendChild(operator);

for (var o of ['+', '-', '/', '*', '%', '**']) {
    var option = document.createElement('option');
    option.textContent = o;
    operator.appendChild(option);
}

// Add the second number input
var secondNum = document.createElement('input');
secondNum.setAttribute('id', 'secondNum');
secondNum.setAttribute('type', 'number');
secondNum.setAttribute('placeholder', '5');
inputForm.appendChild(secondNum);

// Add the button for computing result
var computeButton = document.createElement('input');
computeButton.setAttribute('type', 'button');
computeButton.setAttribute('value', 'Compute');
computeButton.setAttribute('id', 'compute');
inputForm.appendChild(computeButton);
inputForm.appendChild(document.createElement('br'));

// Add the color selector
var color = document.createElement('input');
color.setAttribute('type', 'color');
color.setAttribute('id', 'color');
inputForm.appendChild(color);

// Label for color selector
var span = document.createElement('span');
span.textContent = 'Color Of New Result <div>';
inputForm.appendChild(span);

// Results div below instructions
var results = document.createElement('div');
document.body.appendChild(results);


// Code for the compute event.
// This will check that both operands have inputs, if not, creates error div (color red)
// If both operands exist, does calculation and displays results in a div (color selected by user)
// divs can be removed by clicking on them.
const button = document.getElementById('compute');
button.addEventListener('click', displayResult);

function displayResult() {
    var a = document.getElementById('firstNum').value;
    var b = document.getElementById('secondNum').value;
    var o = document.getElementById('operator').value;
    var today = new Date();
    var now = today.toLocaleDateString() + ' ' + today.toLocaleTimeString();

    if ( a === '' || b === '' ) {
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
        a = Number(a);
        b = Number(b);
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

