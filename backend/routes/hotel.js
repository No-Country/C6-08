const express = require('express')
const {
  getAllHotels,
  postHotel,
  putHotel,
  deleteHotel
} = require('../controllers/hotel.controller.js')
const hotelRouter = express.Router()

hotelRouter.get('/', getAllHotels)
hotelRouter.post('/', postHotel)
hotelRouter.put('/:hotelId', putHotel)
hotelRouter.delete('/:hotelId', deleteHotel)

module.exports = { hotelRouter }
