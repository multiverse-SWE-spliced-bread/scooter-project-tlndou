const User = require('../src/User')
const Dock = require('../src/Dock')
const Scooter = require('../src/Scooter')
const App = require('../src/App')

// create the app
const app = new App()

// create a dock with some scooters
const mancDock = new Dock('Manchester', 5)
mancDock.createScooter()
mancDock.createScooter()

// create and sign in a user
const yahye = app.signUp('supersaiyan', 'kamehameha', 20)
app.logIn('supersaiyan', 'kamehameha')


console.log('Yahye rents a scooter')
yahye.rentScooter(mancDock)
console.log(mancDock, '\n\n')
console.log(yahye, '\n\n')

console.log('Yahye returns it')
yahye.returnScooter(mancDock)
console.log(mancDock, '\n\n')
console.log(yahye, '\n\n')