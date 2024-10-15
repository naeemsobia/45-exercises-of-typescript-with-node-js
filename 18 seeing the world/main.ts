// making array of countries and prints its original order
let countriesToVisit: string[] = ["China", "Denmark" , "Brazil" , "Argentina"];
console.log("Original Order:" , countriesToVisit);

// print the array in alphbetical order without modifying the actual array list
console.log("Alphabetical Order:" , [...countriesToVisit].sort());

//show that the array is still in its original order
console.log("still in Original Order:" , countriesToVisit);

//print the array in reverse order without modifying the actual array list
console.log("Reverse Order:" , [...countriesToVisit].reverse());

//show that the array is still in its original order
console.log("still in Original Order:" , countriesToVisit);

//we have changed the original array order now
console.log("Original Array Reversed:" , countriesToVisit.reverse());

// Print the array to show that its back to its original order
console.log("Back to Original Order:" , countriesToVisit.reverse());

//Print the array to show that its orderhas been changed in alphabetical order now
console.log("Sorted in Alphabetical Order:" , countriesToVisit.sort());

//we have changed again the original array order now in reverse order again
console.log("Original Array Reversed:" , countriesToVisit.reverse());
