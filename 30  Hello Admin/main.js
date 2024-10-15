// Creating an array
var userNames = ["Sobia", "Hira", "Shamia", "Admin", "Safa"];
// Using forEach loop on array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thankyou for logging in again."));
    }
});
