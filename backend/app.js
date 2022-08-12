const express = require('express')

const { globalErrorHandler } = require('./controllers/globalErrorhandler')
const { AppError } = require('./util/AppError')
const { adminHotelRouter } = require('./routes/adminhotel')
const { hotelRouter } = require('./routes/hotel')

const app = express()

app.use(express.json())
app.use('/api/v1/docs', express.static(__dirname + '/docs'))
app.use('/api/v1/adminhotel', adminHotelRouter)
app.use('/api/v1/hoteles', hotelRouter)

app.use('*', (req, res, next) => {
    next(new AppError(404, "not found this server."))
})

app.use(globalErrorHandler)


module.exports = { app }
