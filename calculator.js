function add()
{
	var number1=parseFloat(document.getElementById('num1').value);
	var number2=parseFloat(document.getElementById('num2').value);
	var total=number1+number2;
	document.write("The sum is "+total);
}


function subtract()
{
	var number1=parseFloat(document.getElementById('num1').value);
	var number2=parseFloat(document.getElementById('num2').value);
	var diff=number1-number2;
	document.write("The difference is "+diff);
}


function multiply()
{
	var number1=parseFloat(document.getElementById('num1').value);
	var number2=parseFloat(document.getElementById('num2').value);
	var mult=number1*number2;
	document.write("The product is "+mult);
}


function divide()
{
	var number1=parseFloat(document.getElementById('num1').value);
	var number2=parseFloat(document.getElementById('num2').value);
	var quot=number1/number2;
	document.write("The quotient is "+quot);
}
