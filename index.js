//instantiate express module
const express = require('express')
//init bodyParser
const bodyParser = require('body-parser')
require('express-group-routes')
//use express in app variable
const app = express()
//define the server port
const port = 3000

//allow this app to receive incoming json request
app.use(bodyParser.json())

//controllers
const AuthController = require('./controllers/auth')
const RoomsController = require('./controllers/rooms')

//middlewares
const { authenticated, authorized } = require('./middleware')

//create the homepage route
app.group("/api/v2", (router) => {

    // Auth API
    router.post('/login', AuthController.login)

    // Rooms API
    router.get('/rooms', authenticated, authorized, RoomsController.getRooms) // Get Room
    router.post('/rooms', authenticated, authorized, RoomsController.postRooms) // Post Room
    router.put('/room/:room_id', authenticated, authorized, RoomsController.putRooms) // Update Room
    router.get('/customers', authenticated, authorized, RoomsController.getCustomers) // Get Customer
    router.post('/customers', authenticated, authorized, RoomsController.postCustomers) // Post Customer
    router.put('/customers/:customer_id', authenticated, authorized, RoomsController.putCustomers) // Update Customer
    router.get('/checkin', authenticated, authorized, RoomsController.getCheckinRoom) // Get Checkin
    router.post('/checkin', authenticated, authorized, RoomsController.postCheckin) // Post Checkin
})

app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        res.status(401).json({ message: "You are not authorized." });
    } else {
        next(err);
    }
});

//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`))