var userNames = ["Sobia", "Hira", "Shamia", "Admin", "Safa"];
if (userNames.length === 0) {
    console.log("your array is empty.We need to find some uers");
}
// Using forEach loop on array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ",  would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thankyou for logging in again."));
    }
});
