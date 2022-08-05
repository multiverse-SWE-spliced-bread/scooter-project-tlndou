const Scooter = require('./Scooter')

class Dock {

    constructor (scooters, maxCapacity, location) {
        this.scooters = []
        this.maxCapacity = maxCapacity
        this.location = location

    }

    createScooter () {
        if (this.scooters.legnth === this.maxCapacity) throw new Error("Dock is full!")
        const scooter = new Scooter()
        this.scooters.push(scooter)
    }

}

module.exports = Dock