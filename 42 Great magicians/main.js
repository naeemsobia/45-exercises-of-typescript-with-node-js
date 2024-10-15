function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//defining array
var magician_names = ["Safa", "Haya", "Sobia"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
