const Dock = require("./Dock")
const Scooter = require("./Scooter")

class User {
    // User code here
  #email
    constructor (username, password, email, age) {
      this.username = username
      this.password = password
      this.email = email
      this.age = age
      this.scooter = null
      this.loggedIn = false
      // this.scooter = []
  }

  rentScooter(dock) {
    if(!this.loggedIn) throw new Error("Must be signed in")
    this.scooter = dock.scooters.pop()
    this.scooter.rentedAt = Date.now()
  }

  returnScooter (dock) {
    dock.scooters.push(this.scooter)
    if (this.scooter) {
      dock.scooters.push(this.scooter)
      //time diff in milisec then converted into mins
      const time = (Date.now() - this.scooter.rentedAt) / (1000 * 60)
      //backticks `` allow string interpolation (vars in str)
      console.log(`You will be charged £${time * this.scooter.costPerMin}`)
      this.scooter = null
    }
  }

  totalCharge () {
    return costPerMin * minutesUndocked
  }
}

  module.exports = User