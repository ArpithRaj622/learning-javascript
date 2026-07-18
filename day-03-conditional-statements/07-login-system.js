const isLoggedIn = true;
const isEmailVerified = false;

if (isLoggedIn && isEmailVerified) {
    console.log("Welcome!");
} else if (isLoggedIn && !isEmailVerified) {
    console.log("Please verify your email.");
} else {
    console.log("Please log in.");
}