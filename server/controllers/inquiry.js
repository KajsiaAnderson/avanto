const { Inquiry, User, Car, Photo } = require('../util/models')

module.exports = {
    createInquiry: async (req, res) => {
        try {
            await Inquiry.create(req.body)
            res.status(200).send('success')
        }
        catch (err) {
            res.status(400).send(err)
        }
    },
    getInquiries: async (req, res) => {
        try {
            let data = await Inquiry.findAll({
                include: [User, {
                    model: Car,
                    include: Photo
                }]
            })
            res.status(200).send(data)
        }
        catch (err) {
            res.status(400).send(err)
        }
    }
}