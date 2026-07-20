const purchaseAmount = 4000;
const isMember = false;

if (purchaseAmount >= 5000 && isMember) {
    console.log("20% Discount");
} else if (purchaseAmount >= 5000 && !isMember) {
    console.log("10% Discount");
} else {
    console.log("No Discount");
}