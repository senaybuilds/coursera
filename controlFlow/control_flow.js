let userRole= "admin";
let accessLevel;

if(userRole==="admin"){
    accessLevel = "Full access granted";

}else if(userRole==="manager"){
    accessLevel="Limited access granted";
} else{
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);


let isLoggedIn= true;
let userMessage;

if(isLoggedIn){
    if(userRole==="admin"){
        userMessage="Welcome, admin!";
    }else{
        userMessage="welcome, User!";
    }
}else{
    userMessage="please log in to access the system.";
}
console.log("User Message:", userMessage);


let userType= "subscriber";
let userCatergory;

switch(userType){
    case "admin":
        userCatergory = "Administrator";
        break;
    case "manager":
        userCatergory = "Manager";
        break;
    case "subscriber":
        userCatergory = "Subscriber"
        break;
    default:
        userCatergory = "Unkown"
}

console.log("User category:", userCatergory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";
console.log("Authentication Status:", authenticationStatus);

let personRole = "Enrolled Member";
switch(personRole){
    case "Employee":
        console.log("you have access to the Dietary Services that the organization arranged")
        break;
    case "Enrolled Member":
        console.log("you have access to both the Dietary Services and also One-on-One interaction with a dietician")
        break;
    case "Subscriber":
        console.log("you have partial access to the Dietary Services")
        break;
    case "Non-Subscriber":
        console.log("you don't have access to any program")
        break;
    default:
        console.log("login first to access the program")
}