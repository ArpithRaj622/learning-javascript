const number = 8;

if (number % 3 === 0 && number % 5 === 0) {
    console.log("Divisible by both 3 and 5");
} else if (number % 3 === 0) {
    console.log("Divisible by only 3");
} else if (number % 5 === 0) {
    console.log("Divisible by only 5");
} else {
    console.log("Not divisible by 3 or 5");
}