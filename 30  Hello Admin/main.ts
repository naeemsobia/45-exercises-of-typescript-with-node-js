// Creating an array
let userNames = ["Sobia", "Hira", "Shamia", "Admin", "Safa"];

// Using forEach loop on array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thankyou for logging in again.`)
    }
})

