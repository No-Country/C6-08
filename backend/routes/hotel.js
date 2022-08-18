const express = require('express')
const {
  getAllHotels,
  postHotel,
  putHotel,
  deleteHotel
} = require('../controllers/hotel.controller.js')
const { authentification } = require('../middlewares/authentification')
const hotelRouter = express.Router()

hotelRouter.get('/', getAllHotels)
hotelRouter.post('/', [authentification, postHotel])
hotelRouter.put('/:hotelId', [authentification, putHotel])
hotelRouter.delete('/:hotelId', [authentification, deleteHotel])

module.exports = { hotelRouter }
