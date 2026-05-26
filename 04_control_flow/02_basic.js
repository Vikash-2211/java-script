const UserLoggedIn = true
const DebitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserLoggedIn && DebitCard){

    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    
    console.log("User logged in");
}