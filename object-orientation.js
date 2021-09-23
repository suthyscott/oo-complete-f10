let person = {
    firstName: "Scott",
    lastName: "Sutherland",
    age: 23
}

// console.log(person.firstName)
// console.log(person['firstName'])

// Destructuring

const {firstName} = person
// console.log(firstName)

let meal = {
    appetizer: 'Calamari',
    entree: 'Steak',
    dessert: 'Chocolate cake',
    drink: 'Merlot wine'
}

// const {dessert} = meal 

// console.log(dessert)
// console.log(meal)

// const {appetizer, entree, dessert, drink} = meal

const {drink: bestDrinkEver, entree: mainCourse} = meal
// const bestDrinkEver = meal.drink
// console.log(drink, meal)


for(let key in person){
    // console.log(typeof key)
    // console.log('object', person)
    // console.log('value', person[key])
}
// Property name is the key
// The value is the object at the key (person[key])

person.job = "Instructor"
person.job = 'chicken herder'

person['pets'] = ['chicken', 'duck']

person.height = 183

delete person.height

// console.log(person)


class Dog {
    constructor(dogName, dogBreed, dogAge){
        this.name = dogName, 
        this.breed = dogBreed,
        this.age = dogAge,
        this.hasFleas = false
    }

    gotFleas(){
        this.hasFleas = !this.hasFleas
    }
    bark(){
        console.log(`Hi, my name is ${this.name} and I am an ${this.age} year old ${this.breed}`)
    }
}

let lassie = new Dog("Lassie", "Collie", 18)
let beethoven = new Dog('Beethoven', 'St. Bernard', 12)

// beethoven.bark()
// lassie.bark()

// console.log(beethoven)
// lassie.gotFleas()

// console.log(Object.getOwnPropertyNames(new Dog))


class Product {
    constructor(productName, productPrice){
        this.name = productName,
        this.price = productPrice,
        this.departments = []
    }

    addToDepartment(depName){
        this.departments.push(depName)
    }
}

let batmanToy = new Product('Batman Action Figure', 4.99)
batmanToy.addToDepartment('Toys')
batmanToy.addToDepartment('Kiosk')
console.log(batmanToy)