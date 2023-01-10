const express = require('express')
const cors = require('cors')
const db = require('./util/database')
const {Car, Photo, User, Inquiry} = require('./util/models')
const seed = require('./util/seed')
const {getAllCars} = require('./controllers/car')

const server = express()
server.use(express.json())
server.use(cors())

Car.hasMany(Photo)
Photo.belongsTo(Car)

User.hasMany(Inquiry)
Inquiry.belongsTo(User)

Car.hasMany(Inquiry)
Inquiry.belongsTo(Car)


//endpoints
server.get('/api/allCars', getAllCars)


db
// .sync({force: true})
// .then(() => seed())

server.listen(4000, () => console.log(`Up on 4000`))