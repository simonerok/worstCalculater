("strict");
/* VARIABLES */
const firstNumber = document.querySelector("#firstnumber");
const secondNumber = document.querySelector("#secondnumber");
const clear = document.querySelector("#clear");
const calc = document.querySelector("#calculate");
let operatorSelect = document.querySelector("#operator");

/* READING THE NUMBERS AND OPERATORS */
operatorSelect.addEventListener("click", readOperator);

/* laver string fra inputfelt om til et nummer. pharseInt er en metode der virker på strings og konvertere dem til tal??*/
firstNumber.addEventListener("input", function () {
  let valAsNumber = parseInt(firstNumber.value);
  console.log(typeof valAsNumber);
});
secondNumber.addEventListener("input", function () {
  let valAsNumber = parseInt(secondNumber.value);
  console.log(typeof valAsNumber);
});

function readOperator() {
  let selectedOperator = operatorSelect.value;
  if (selectedOperator === "add") {
    return "add";
  } else if (selectedOperator === "sub") {
    return "sub";
  } else if (selectedOperator === "mul") {
    return "mul";
  } else if (selectedOperator === "div") {
    return "div";
  } else {
    return "Invalid operator";
  }
}

console.log(readOperator());

/* DO THE CALCULATION */
calc.addEventListener("click", calculate);

function calculate() {
  let operator = readOperator();
  let firstVal = parseInt(firstNumber.value);
  let secondVal = parseInt(secondNumber.value);
  let result;

  if (operator === "add") {
    result = firstVal + secondVal;
  } else if (operator === "sub") {
    result = firstVal - secondVal;
  } else if (operator === "mul") {
    result = firstVal * secondVal;
  } else if (operator === "div") {
    result = firstVal / secondVal;
  } else {
    /* denne skal være der så hvis der af en eller anden grund ikke kan være et resultat hvis man fx skriver # eller andet som den ikke kan regne ud */
    result = "Invalid operator";
  }

  console.log(result);
}
