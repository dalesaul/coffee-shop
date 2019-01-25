// 1. Build three objects. Each one should represent an employee at the coffee shop.
// 2. Each employee object should have the following properties:
const jim={
    name: "Jim Bob",
    startDate: "12/12/2017",
    jobTitle: "frother from another mother",
    payRate: 7.25,
    favoriteDrink: "carmel machiatto",
    drinkSkills: [ "latte",
                    "americano",
                    "mocha",
                    "frapaccino"]
}

const joe={
    name: "Joe Shmoe",
    startDate: "2/22/2011",
    jobTitle: "manager",
    payRate: "13.00",
    favoriteDrink: "tea",
    drinkSkills:  ["latte",
                    "americano",
                    "mocha",
                    "frapaccino",
                    "tea",
                    "yerba-mate",
                    "espresso"],
    makeCoffeeDrink: function(drinkParam){
        for(let i=0; i < this.drinkSkills.length; i++){
            if (this.drinkSkills[i] === drinkParam){
                console.log(`Here is your ${drinkParam}!`);
                }
        else
        console.log(`No can do!`);

        }


}
}

const john={
    name: "John Boy",
    startDate: "07/12/2017",
    jobTitle: "assistant to the manager",
    payRate: "7.85",
    favoriteDrink: "dirty chai latte",
    drinkSkills:  ["latte",
                    "americano",
                    "mocha",
                    "espresso"]
}
// 2. Build another object called coffeeShopStaff
// 3. This object should have two properties:
// - a property of fullTime that holds an array of full time staff members
// - a property of partTime that holds an array of part time staff members
// - Put two of your employee objects from steps 1 & 2 into the part time array. Put one of them in the full time array.

const coffeeShopStaff={
    fullTime: [john],
    partTime: [jim,
                joe]
}
console.log(coffeeShopStaff);

joe.makeCoffeeDrink("yerba-mate");
joe.makeCoffeeDrink("Soy Latte");

// 1. Remember your employee objects from up there? Give one of them a method called makeCoffeDrink
// 2. This method should accept a parameter of drink and return a string of "Here's your [drink]!" 
// 3. Call the method and pass in any drink (string) you want
// 4. Call the method (be sure to catch the returned string in a variable!)
// Bous: If you have time, refactor your method so that it checks to see if the employee knows how to make the drink (i.e. if it's in the array of drinks they know how to make). If they do, you should return the string from step 2. If not, you should return a string that says "No can do!"

