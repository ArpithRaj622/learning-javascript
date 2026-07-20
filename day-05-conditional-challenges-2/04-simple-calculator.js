const num1 = 6;
const num2 = 9;
const operator = "%";

if (operator === "+") {
    console.log(`${num1} ${operator} ${num2} = ${num1 + num2}`);
} else if (operator === "-") {
    console.log(`${num1} ${operator} ${num2} = ${num1 - num2}`);
} else if (operator === "*") {
    console.log(`${num1} ${operator} ${num2} = ${num1 * num2}`);
} else if (operator === "/") {
    console.log(`${num1} ${operator} ${num2} = ${num1 / num2}`);
} else {
    console.log("Invalid operator");
}