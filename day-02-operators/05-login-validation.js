let isLoggedIn = true;
const isEmailVerified = true;
const hasSubscription = false;
const isAdmin = false;

console.log(`Logged In = ${isLoggedIn} & Email Verified = ${isEmailVerified}
Can the user access the dashboard? -> ${isLoggedIn && isEmailVerified}
`);

console.log(`Logged In  = ${isLoggedIn} & Subscription = ${hasSubscription}
Can the user access the premimum? -> ${isLoggedIn && hasSubscription}
`);

console.log(`Logged In = ${isLoggedIn} & Admin = ${isAdmin}
Can the user access the the admin panel? ${isLoggedIn && isAdmin}
`);

console.log(`Logged In = ${isLoggedIn} & Email Verified = ${isEmailVerified}
Does the user need to verify email? -> ${!isEmailVerified}
`);

isLoggedIn = false;
console.log(`Logged In = ${isLoggedIn}
Should the user see the Login page? -> ${!isLoggedIn}
`);