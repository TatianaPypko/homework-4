const firstNumber = +prompt("Enter first number", "");
const secondNumber = +prompt("Enter second number", "");
const thirdNumber = +prompt("Enter third number", "");

const result = (firstNumber + secondNumber + thirdNumber) / 3;

if (!isNaN(result)) {
  alert(result);
} else {
  alert("Entered values are not numbers!");
}
