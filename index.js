// A Basic arithmetic calculator

const ADD = 1;
const SUBTRACT = 2;
const DIVIDE = 3;
const MULTIPLY = 4;
const QUIT = 5;

function getMenuChoice() {
  // console.log();
  // console.log('Menu');
  // console.log('********************************');
  // console.log('1. Add two numbers')
  // console.log('2. Subtract two numbers')
  // console.log('3. Divide two numbers')
  // console.log('4. Multiply two numbers')
  // console.log('5. Modulo operation')
  // console.log('6. Quit the program')
  // console.log()

  let choice = parseInt(prompt(
    "Enter a number: \n1. To add two numbers\n2. To subtract two numbers\n3. To Divide two numbers\n4. To multiply two numbers\n5. To Quit program"
  ));

    while(choice < ADD || choice > QUIT) {
        choice = parseInt(prompt("ENTER A VALID CHOICE: \n1. To add two numbers\n2. To subtract two numbers\n3. To Divide two numbers\n4. To multiply two numbers\n5. To Quit program"))
    }

  return choice;

}

function add(a, b) {
  return a + b;
}

function Subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function get_operands() {
    let num1 = parseInt(prompt("Enter a number:"))
    let num2 = parseInt(prompt("Enter another number:"))

    return [num1, num2]
}

let choice = 0

while(choice != QUIT) {
    choice = getMenuChoice();

    if (choice === ADD) {
        let [num1, num2] = get_operands();
        let answer = add(num1, num2);
        alert(`${num1} + ${num2} = ${answer}`)
        
    }
}

