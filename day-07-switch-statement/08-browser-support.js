const browser = "Chrome";

switch (browser) {
    case "Chrome":
    case "Edge":
    case "Firefox":
        console.log("Supported Browser");
        break;
    case "Internet Explorer":
        console.log("Not Supported");
        break;
    default:
        console.log("Unkown Browser");
}