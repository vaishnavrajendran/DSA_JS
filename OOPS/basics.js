class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getNameAndAge = () => {
        let name = this.name
        let age = this.age
        return { name, age }
    }

    changeName = (name) => {
        this.name = name
    }
}

class Hostel {
    constructor(address, price, residents) {
        this.address = address
        this.price = price
        this.residents = residents
    }

    getResidents = () => {
        return this.residents
    }

    addResidents = (details) => {
        this.residents.push(details)
    }
}

let person1 = new Person("Edward", 21)
let person2 = new Person('Jain', 22)
let person3 = new Person('Shibin', 25)

let room = new Hostel("Chennai", 12000, [person1, person2])
console.log(room.getResidents());
room.addResidents(person3)
console.log(room.getResidents());

/*Inheritance */

class Programmer extends Person {
    constructor(name, age, company, salary) {
        super(name, age)
        this.company = company
        this.salary = salary
    }
    getCompany = () => {
        return this.company
    }

    sayNameAndAge = () => {
        let name = this.getNameAndAge().name //using the fn from Person class
        let age = this.getNameAndAge.age
        console.log(`Hey my name is${name} and i am ${age} years old`);
    }
}

let programmer = new Programmer("Edward", 21, "Google", 20000000)
console.log(programmer.sayNameAndAge());