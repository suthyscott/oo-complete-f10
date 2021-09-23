let person = {
    firstName: "Chandler",
    lastName: "Bong",
    age: 34
}

// console.log(person.firstName) // much more common

// console.log(person['firstName']) // less common

let meal = {
    appetizer: 'chips & salsa',
    entree: 'al pastor burrito',
    dessert: 'churros',
    drink: 'dr. pepper'
}
// console.log(dessert)
// const {dessert} = meal
// const {appetizer, entree} = meal
// const {drink: bestSodaEver} = meal

const myDrink = meal.drink
const myAppetizer = meal.appetizer
const myEntree = meal.entree
const myDessert = meal.dessert

// const {appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal

// const {appetizer, entree, dessert, drink: myDrink} = meal
// console.log(bestSodaEver)

// let person = {
//     firstName: "Chandler",
//     lastName: "Bong",
//     age: 34
// }

// for(key in person){
//     console.log(person[key])
// }

person.job = "Statistical Analysis and Data Reconfiguration" 

person['pets'] = ["Chicken", 'Duck']

let teams = {
    teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
    teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
    teamThree: ['porter', 'blake', 'june', 'owen'],
    teamFour: ['brian', 'riley', 'ezra', 'jordan'],
    teamFive: ['grey', 'milo', 'mckay', 'leo']
  }

delete teams.teamFour

// console.log(teams)


class Dog {
    constructor(dogName, dogBreed, dogAge){
        this.name = dogName
        this.breed = dogBreed
        this.age = dogAge
        this.hasFleas = false
    }

    greeting(){
        console.log(`Hi, my name is ${this.name} and I am an ${this.age} year old ${this.breed}`)
    }
}

let lassie = new Dog('Lassie', 'Collie', 18)
let beethoven = new Dog('Beethoven', 'St. Bernard', 12)
// lassie.greeting()

for(key in lassie){
    // console.log(key)
    console.log(lassie[key])
}