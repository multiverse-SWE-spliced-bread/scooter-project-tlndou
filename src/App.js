const User = require("./User")

class App {
    
    constructor () {
        this.users = []
    }

    signUp (username, password, age) {
        if (this.users.find(u => u.username === username)) throw new Error("User already exists")
        if (age < 18) throw new Error("Must be 18 or over")
        const user = new User(username, password, age)
        this.users.push(user)
        return user
    }

    logIn (username, password) {
        const user = this.users.find(u => u.username === username)
        if (!user) throw new Error("Please sign up first")
        if (user.password !== password) throw new Error("Access denied")
        user.loggedIn = true
    }
}

module.exports = App
