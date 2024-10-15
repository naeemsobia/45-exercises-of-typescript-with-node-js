function makeSandwich(...items:string[]){
    console.log(" \n Making a sandwich with the following items: \n");
    items.forEach(singleItem => console.log(singleItem));

    console.log("Now enjoy sandwich");
}
// calling function 3 times with 3 different arguments
makeSandwich("Chicken", "Cheese", "Butter", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Cheese", "Cucumber", "Chicken", "Egg", "Mayo");
