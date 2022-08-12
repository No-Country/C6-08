const express = require('express')
const hotelRouter = express.Router()

const TODO = (_req, res) => res.send('TODO')

hotelRouter.get('/', TODO)
hotelRouter.post('/', TODO)
hotelRouter.put('/:hotelId', TODO)
hotelRouter.delete('/:hotelId', TODO)

module.exports = { hotelRouter }
