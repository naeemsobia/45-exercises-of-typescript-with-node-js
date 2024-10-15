// Creating a Guest List Array
let guestList =  ["Sobia", "Hira", "Shamia", "Safa" ];
// making variable for those guest who can't come
let dontCome = guestList[0];
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
let middleIndex: number =Math.floor(guestList.length / 2);
// Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "Naheed");
// Print message of updated list
console.log("Updated List of our Guests");
// Sending an invitation message to our guest one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, Would you like to dinner with me?`));


