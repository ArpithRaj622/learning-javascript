const month = "February";

switch (month) {
    case "December":
    case "January":
    case "February":
        console.log("Winter");
        break;
    case "March":
    case "April":
    case "May":
        console.log("Summer");
        break;
    case "June":
    case "July":
    case "August":
        console.log("Monsoon");
        break;
    case "September":
    case "October":
    case "November":
        console.log("Autumn");
        break;
    default:
        console.log("INvalid Month");
}