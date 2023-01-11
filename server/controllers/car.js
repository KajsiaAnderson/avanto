const { Car, Photo } = require('../util/models')

module.exports = {
    getAllCars: async (req, res) => {
        try {
            let cars = await Car.findAll({
                include: [Photo]
            })
            res.status(200).send(cars)
        }
        catch (err) {
            res.status(400).send(err)
        }
    },
    getCar: async (req, res) => {
        try {
            let car = await Car.findOne({
                where: {id: req.params.id},
                include: [Photo]
            })
            res.status(200).send(car)
        }
        catch (err) {
            res.status(400).send(err)
        }
    }
}