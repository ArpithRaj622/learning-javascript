const age = 4;
const hasTicket = true;
const withParent = true;

if (age >= 18 && hasTicket) {
    console.log ("Allowed");
} else if (age < 18 && hasTicket && withParent){
    console.log("Allowed");
} else {
    console.log("Not Allowed");
}