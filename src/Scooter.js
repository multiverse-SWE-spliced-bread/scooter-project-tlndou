class Scooter {

  constructor (licenceNum) {
      this.licenceNum = Math.floor(Math.random() * (10**8))
      this.isDocked = true
      this.isCharged = true
      this.costPerMin = 0.2
  }

}

module.exports = Scooter;
