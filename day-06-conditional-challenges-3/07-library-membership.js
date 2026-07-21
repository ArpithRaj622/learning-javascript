const age = 24;
const hasMembershipCard = true;
const membershipExpired = false;

if (age >= 12 && hasMembershipCard && !membershipExpired) {
    console.log("Entry Allowed");
} else {
    console.log("Entry Denied");
}