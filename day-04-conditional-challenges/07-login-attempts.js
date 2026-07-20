const attempts = 2;

if (attempts <= 2) {
    console.log("You can try again");
} else if (attempts <= 4) {
    console.log("One attempt left");
} else {
    console.log("Account locked");
}