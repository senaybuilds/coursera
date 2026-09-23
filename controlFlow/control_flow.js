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
