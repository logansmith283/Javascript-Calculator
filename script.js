document.title = "Dynamic JavaScript Calculator";

// Create the instruction div
var instructionDiv = document.createElement('div');
instructionDiv.setAttribute('class', 'black stuff-box shadowed');
document.body.appendChild(instructionDiv);
var headline = document.createElement('h1');
headline.textContent = 'JavaScript Calculator';
instructionDiv.appendChild(headline);
var para = document.createElement('p');
para.textContent = 'Create An Expression:';
instructionDiv.appendChild(para);
var inputForm = document.createElement('span');
instructionDiv.appendChild(inputForm);
var firstNum = document.createElement('input');
firstNum.setAttribute('type', 'number');
inputForm.appendChild(firstNum);



