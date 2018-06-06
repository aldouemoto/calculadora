document.getElementById("calculate-button").onclick = function() {

//Get the numbers inside inputs elements
let elem1 = document.getElementById("elem-1");
let elem2 = document.getElementById("elem-2");

let val1 = parseInt(elem1.value);
let val2 = parseInt(elem2.value);
let sum = val1 + val2;

let choice = document.querySelector('input[name="operation"]:checked');
let operation = choice.value;


if (isNaN(val1) || isNaN(val2)){
	alert('Favor digitar um valor');
} else {
let operationResult = getResult(val1,val2,operation);

let resultElement = document.getElementById('result');
resultElement.innerText = operationResult;
}


}

/**
*Returns the result of an operation over two numbers.
*Arguments: two valid numbers and one opration symbol.
*Supports sum, subtraction, multiplication and division.
*/

function getResult(val1,val2, operation){
if(operation === "+"){
		return val1 + val2;
	} else if(operation === "-"){
		return val1 - val2;
	} else if(operation === "*"){
		return val1 * val2;
	} else if(operation === "/"){
		return val1 / val2;
	} else if(operation === "%"){
		return (val1*val2)/100;
	} else if(operation === "^"){
		return val1 ** val2;
	}
}



