function show_magicians(magicians: string[]){
    magicians.forEach(name =>console.log(name));

}

function make_great(magicians: string[]){
    return magicians.map(name =>`The Great ${name}`);
}

//defining array
let magician_names = ["Safa", "Haya", "Sobia"];

let  great_magicians = make_great(magician_names);
show_magicians(great_magicians)
