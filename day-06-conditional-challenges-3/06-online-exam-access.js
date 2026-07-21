const isLoggedIn = true;
const examFeePaid = true;
const examStarted = false;

if (isLoggedIn && examFeePaid && !examStarted) {
    console.log("You can take the exam");
} else {
    console.log("Access Denied");
}