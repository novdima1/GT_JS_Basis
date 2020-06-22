class Animal {
    static type = 'ANIMAL'
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() {
        console.log('I\'m an animal ' + this.name)
    }
}

const animalFeatures = {
    name: 'Animal',
    age: 2,
    hasTail: true
}
const animal = new Animal(animalFeatures)

class Cat extends Animal {
    static type = 'CAT'

    constructor(options) {
        super(options)
        this.color = options.color
    }

    voice() {
        console.log('I\'m an animal ' + this.name + this.color)
    }

    get ageInfo() {
        return this.age * 7
    }

    set ageInfo(newAge) {
        this.age = newAge
    }
}

const catFeatures = {
    name: 'Animal',
    age: 2,
    hasTail: true,
    color: 'Red'
}
const cat = new Cat(catFeatures)
