const isLoggedIn = true;
const isEmailVerified = true;
const isTwoFactorEnabled = true;

if (isLoggedIn && isEmailVerified && isTwoFactorEnabled) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}