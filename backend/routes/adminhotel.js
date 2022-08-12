const express = require('express');

const {
  getAllAdminHotel,
  getAdminHotelById,
  postAdminHotel,
  patchAdminHotelById,
  deleteAdminHotelById,
} = require('../controllers/adminhotel.controller');

const router = express.Router();

router.get('/', getAllAdminHotel);

router.get('/:id', getAdminHotelById);

router.post('/', postAdminHotel);

router.patch('/:id', patchAdminHotelById);

router.delete('/:id', deleteAdminHotelById);

module.exports = { adminHotelRouter: router };
