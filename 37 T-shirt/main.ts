// Making a function
function make_shirt(size: string = "Large", printMessage: string = "I love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`)
}
// calling a function
make_shirt();

// calling a function now with medium size and default message
make_shirt("Medium")

// calling a function now with small size and also different message
make_shirt("Small", "I love java Script")