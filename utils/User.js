export class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return this.name
    }
}

module.exports.User = User