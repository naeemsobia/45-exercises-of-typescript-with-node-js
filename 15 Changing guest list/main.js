var guestList = ["Sobia", "Hira", "Shamia", "Safa"];
var dontCome = guestList[0];
console.log(dontCome, "Ni A Skta");
guestList.splice(0, 1, "Nimra");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
