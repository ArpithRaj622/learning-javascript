const num1 = 6;
const num2 = 9;
const operator = "*";

switch (operator) {
    case "+":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case "-":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case "*":
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case "/":
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    case "%":
        console.log(`${num1} % ${num2} = ${num1 % num2}`);
        break;
    default:
        console.log("Invalid Operator");
}