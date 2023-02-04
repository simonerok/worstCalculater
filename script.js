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
