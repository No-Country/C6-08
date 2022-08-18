const express = require('express');

const {
  getAllHotel,
  createHotel,
  getHoteltById,
  updateHotelPatch,
  deleteHotel
} = require('../controllers/hotels.controller');

//middlewares
const { validateSession } = require('../middlewares/auth.middlewares');
const { hotelExists, 
  hotelOwner 
} = require('../middlewares/hotel.middleware');

const { createHotelValidators, 
  validateResult 
} = require('../middlewares/validators.middleware');

const router = express.Router();

router.use(validateSession)
router.get('/', getAllHotel);

router.post('/', createHotelValidators, validateResult, createHotel);

router.use('/:id', hotelExists)
      .route('/:id')
      .get(hotelOwner, getHoteltById)
      .patch( hotelOwner, updateHotelPatch)
      .delete( hotelOwner, deleteHotel)


module.exports = { hotelRouter: router };