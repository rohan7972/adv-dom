function addition() {
    var firstNumber = +document.querySelector('#firstNumber').value;
    var secondNumber = +document.querySelector('#secondNumber').value;
    var result = firstNumber + secondNumber;
    document.querySelector('#result').innerHTML = 'Result: ' + result;
}

document.querySelector('#subtractBtn').onclick = function() {
    var firstNumber = +document.querySelector('#firstNumber').value;
    var secondNumber = +document.querySelector('#secondNumber').value;
    var result = firstNumber - secondNumber;
    document.querySelector('#result').innerHTML = 'Result: ' + result;
};

document.querySelector('#multiplyBtn').addEventListener('click', function() {
    var firstNumber = +document.querySelector('#firstNumber').value;
    var secondNumber = +document.querySelector('#secondNumber').value;
    var result = firstNumber * secondNumber;
    document.querySelector('#result').innerHTML = 'Result: ' + result;
});

function division() {
    var firstNumber = +document.querySelector('#firstNumber').value;
    var secondNumber = +document.querySelector('#secondNumber').value;
    var result = firstNumber / secondNumber;
    document.querySelector('#result').innerHTML = 'Result: ' + result;
}