//Models
const { Hotel } = require('../models/hotel.model');
const { User } = require('../models/users.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { filterObj } = require('../utils/filterObj');

exports.getAllHotel = catchAsync(async (req, res, next) => {
  const hotels = await Hotel.findAll({
    where: { status: 'active' },
    include: [{ model: User, attributes: { exclude: ['password'] } }]
  });

  // if (hotel.length === 0) {
  //   res.status(404).json({
  //     status: 'error',
  //     message: 'there are not hotel created until.'
  //   });
  //   return;
  // }
  res.status(201).json({
    status: 'success',
    data: {
      hotels
    }
  });
});

exports.getHotelById = catchAsync(async (req, res, next) => {
  const { hotel } = req;

  res.status(200).json({
    status: 'success',
    data: { hotel }
  });
});

exports.createHotel = catchAsync(async (req, res, next) => {
  const { title, description, quantity, price } = req.body;
  const { id } = req.currentUser;

  const newHotel = await Hotel.create({
    title,
    description,
    quantity,
    price,
    userId: id
  });

  res.status(201).json({
    status: 'success',
    data: { newHotel }
  });
});

exports.updateHotelPatch = catchAsync(async (req, res, next) => {
  const { hotel } = req;

  const data = filterObj(
    req.body,
    'title',
    'description',
    'quantity',
    'price'
    // id: product.userId
  );

  await hotel.update({ ...data });

  res.status(201).json({
    status: 'success',
    message: `The hotel id ${hotel.id} was update correctly`
  });
});

exports.deleteHotel = catchAsync(async (req, res, next) => {
  const { hotel } = req;

  await hotel.update({ status: 'deleted' });

  res
    .status(201)
    .json({
      status: 'success',
      message: `The product id ${hotel.id} was update correctly`
    });
});