//Models
// const { Hotel } = require('../models/hotel.model');
// const { User } = require('../models/users.model');

// Util
const { Checkboxes } = require('../models/checkboxes.model');
const { catchAsync } = require('../util/catchAsync');
const { filterObj } = require('../util/filterObject');

exports.getAllCheckboxes = catchAsync(async (req, res, next) => {
  const checkboxes = await Checkboxes.findAll({
    where: { status: 'active' },
    // include: [{ model: User, attributes: { exclude: ['password'] } }]
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

exports.getCheckboxesById = catchAsync(async (req, res, next) => {
  const { checkboxes } = req;

  res.status(200).json({
    status: 'success',
    data: { checkboxes }
  });
});

exports.createCheckboxes = catchAsync(async (req, res, next) => {
  const { 
    Cocina,
    Aire_acondicionado, 
    Piscina, 
    Estacionamiento_techado, 
    Microondas, 
    Wifi,
    Jacuzzy,
    Frigobar,
    Lavadora,
    Baño_en_suite,
    Sala_fitness, } = req.body;
  const { id } = req.currentUser;

  const newCheckboxes = await Checkboxes.create({
    Cocina, 
    Aire_acondicionado, 
    Piscina, 
    Estacionamiento_techado, 
    Microondas, 
    Wifi,
    Jacuzzy,
    Frigobar,
    Lavadora,
    Baño_en_suite,
    Sala_fitness,
    userId: id
  });

  res.status(201).json({
    status: 'success',
    data: { newCheckboxes }
  });
});

exports.updateCheckboxesPatch = catchAsync(async (req, res, next) => {
  const { checkboxes } = req;

  const data = filterObj(
    req.body,
    Cocina,
    Aire_acondicionado, 
    Piscina, 
    Estacionamiento_techado, 
    Microondas, 
    Wifi,
    Jacuzzy,
    Frigobar,
    Lavadora,
    Baño_en_suite,
    Sala_fitness,
    // id: product.userId
  );

  await checkboxes.update({ ...data });

  res.status(201).json({
    status: 'success',
    message: `The checkboxes id ${hotel.id} was update correctly`
  });
});

exports.deleteCheckboxes = catchAsync(async (req, res, next) => {
  const { checkboxes } = req;

  await checkboxes.update({ status: 'deleted' });

  res
    .status(201)
    .json({
      status: 'success',
      message: `The checkboxes id ${hotel.id} was update correctly`
    });
});