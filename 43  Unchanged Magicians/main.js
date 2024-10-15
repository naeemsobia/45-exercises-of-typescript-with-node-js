function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//defining array
var magician_names = ["Safa", "Haya", "Sobia"];
// Making a copy of original array through .Slice function
var copy_magicians_names = magician_names.slice();
// Modify the copied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magicians_names);
// Show both arrays original and copied
show_magicians(magician_names);
show_magicians(copy_great_magicians);
