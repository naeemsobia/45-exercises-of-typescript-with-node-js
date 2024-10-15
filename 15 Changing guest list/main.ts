let guestList = ["Sobia", "Hira", "Shamia", "Safa"];

let dontCome = guestList[0];

console.log(dontCome, "Ni A Skta");

guestList.splice(0, 1, "Nimra");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));