function show_magicians(magicians: string[]){
    magicians.forEach(name =>console.log(name));

}

function make_great(magicians: string[]){
    return magicians.map(name =>`The Great ${name}`);
}

//defining array
let magician_names = ["Safa", "Haya", "Sobia"];

// Making a copy of original array through .Slice function
let copy_magicians_names = magician_names.slice()

// Modify the copied array to include "The Great" with their names
let copy_great_magicians = make_great (copy_magicians_names);

// Show both arrays original and copied
show_magicians(magician_names);

show_magicians(copy_great_magicians);
