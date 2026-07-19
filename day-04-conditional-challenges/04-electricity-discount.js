const billAmount = 5999;

if (billAmount < 1000) {
    console.log("No Discount");
} else if (billAmount <= 2999) {
    console.log("5% Discount");
} else if (billAmount <= 4999) {
    console.log("10% Discount");
} else {
    console.log("20% Discount");
}