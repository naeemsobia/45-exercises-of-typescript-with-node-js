// Creating a Guest List Array
var guestList = ["Sobia", "Hira", "Shamia", "Safa"];
// making variable for those guest who can't come
var dontCome = guestList[0];
// Print the name of guest who cant come
console.log(dontCome, "Ni a Skti hn");
// Add or Remove values from  Guest List Array
guestList.splice(0, 1, "Nimra");
// Message print for bigger table
console.log("Good News ! WE Have Found a Bigger Table for Dinner.");
// Adding a new guest at starting index of Array
guestList.unshift("Haya");
// Adding a new guest at ending index of Array
guestList.push("Hooria");
// Get a middle index of our guest list Array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "Naheed");
// Print message of updated list
console.log("Updated List of our Guests");
// Sending an invitation message to our guest one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", Would you like to dinner with me?")); });
// inform that only two guests are invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two guests to dinner with me");
// using while loop to remove guests from array until onlt two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
// sending an invitation to last two guests
console.log("Invitations to the last two guests");
guestList.forEach(function (lasttwo) { return console.log("luckily ".concat(lasttwo, ", you are still invited to dinner")); });
// removing two guests from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
