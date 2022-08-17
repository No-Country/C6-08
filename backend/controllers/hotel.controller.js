const { Hotel } = require('../models/hotel.models')
const { catchAsync } = require('../util/catchAsync')
const { AppError } = require('../util/AppError')

const getAllHotels = catchAsync(async (req, res) => {
  const users = await Hotel.findAll({}) //TODO agregar queries
  res.status(200).json({
    status: 'Success',
    data: users
  })
})

const hotelData = body => ({
  name: body.name,
  rooms: body.rooms,
  description: body.description,
  cost: body.cost,
  lat: body.lat,
  long: body.long
})

const validateBody = body => {
  const properties = Object.keys(hotelData({}))
  for(const property of properties) {
    if(!body[property])
      throw new AppError(400, 'Some properties and/or their values are incorrect.')
  }
}

const postHotel = catchAsync(async (req, res) => {
  validateBody(req.body)
  const data = hotelData(req.body)
  const response = await Hotel.create(data)
  res.status(201).json({
    status: 'Success',
    data: {
      response
    }
  })
})

const getByIdQuery = id => ({ where: { id, status: 'active' } })

const getHotelById = async id => await Hotel.findOne(getByIdQuery(id))

const putHotel = catchAsync(async (req, res, next) => {
  validateBody(req.body)
  const data = hotelData(req.body)
  const { hotelId } = req.params
  const hotel = await getHotelById(hotelId)
  if(!hotel)
    next(new AppError(404, 'There are not hotels until.'))
  else {
    const response = await Hotel.update({ status: 'deleted' })
    res.status(200).json(response)
  }
})

const deleteHotel = catchAsync(async (req, res) => {
  const { hotelId } = req.params
  const hotel = await getHotelById(hotelId)
  if(!hotel)
    res.status(204).end()
  else {
    await Hotel.update({ status: 'deleted' })
    res.status(204).end()
  }
})

module.exports = {
  getAllHotels,
  postHotel,
  putHotel,
  deleteHotel
}
