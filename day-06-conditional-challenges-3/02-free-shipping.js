const cartTotal = 2000;
const isPremiumMember = true;
const couponApplied = true;

if ((cartTotal >= 2000 || isPremiumMember) && !couponApplied) {
    console.log("Free Shipping");
} else {
    console.log("Shipping Charges Apply");
}