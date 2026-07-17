const isAdult = true;
const isEmailVerified = false;
const isLoggedIn = true;
const hasSubscription = false;

// && operator
console.log(isAdult && isEmailVerified);
console.log(isAdult && isLoggedIn);
console.log(isEmailVerified && hasSubscription);
console.log();

// || operator
console.log(isAdult || isEmailVerified);
console.log(isEmailVerified || hasSubscription);
console.log(isEmailVerified || isLoggedIn);
console.log();

// ! operator
console.log(!isAdult);
console.log(!hasSubscription);
console.log(!isLoggedIn);
