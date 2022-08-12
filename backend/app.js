const express = require('express');

const { globalErrorHandler } = require('./controllers/globalErrorhandler');
const { AppError } = require('./util/AppError');
const { adminHotelRouter } = require('./routes/adminhotel');

const app = express();

app.use(express.json());
app.use('/api/v1/adminhotel', adminHotelRouter);

app.use('*', (req, res, next) => {
  next(new AppError(404, 'not found this server.'));
});

app.use(globalErrorHandler);

module.exports = { app };
