// Models
const { Hotel } = require('../models/hotel.model');

// Utils
const { AppError } = require('../utils/appError');
const { catchAsync } = require('../utils/catchAsync');

exports.hotelExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const hotel = await Hotel.findOne({
    where: { id, status: 'active' },
    include: [{ model: User, attributes: { exclude: ['password'] } }]
  });
  // console.log(hotel)

  if (!hotel) {
    return next(new AppError(404, 'No hotel found with that ID'));
  }
  req.hotel = hotel;
  next();
});

exports.hotelOwner = catchAsync(async (req, res, next) => {
  // Get current session user's id
  const { currentUser, hotel } = req;

  // Compare hotel userId
  if (hotel.userId !== currentUser.id) {
    return next(new AppError(403, 'You are not the owner of this hotel'));
  }

  next();
});