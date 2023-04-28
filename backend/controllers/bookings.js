const bookingRepository = require ("../repositories/bookings.js");
const { body, validationResult } = require('express-validator');

const getAllBookings = async (req, res) => {
  const bookings = await bookingRepository.getAllBookings();

  res.status(200).json({ bookings });
};

const getBookingById = async (req, res) => {
  const booking = await bookingRepository.getBookingById(req.params.bookingId);

  res.json({ booking });
}

const createBooking = async (req, res) => {
  try {
    await body('fecha').notEmpty().run(req);
    await body('cod').notEmpty().run(req);
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const booking = await bookingRepository.createBooking(req.body);

    res.json({ booking });
  } catch (error) {
    res.status(500).json({ error })
  }
}

const deleteBooking = async (req, res) => {
  try {
    const booking = bookingRepository.deleteBooking(req.params.bookingId)

    res.json({ booking });
  } catch (error) {
    res.status(500).json({ error })
  }
}

const updateBooking = async (req, res) => {
  try {
    await body('fecha').notEmpty().run(req);
    await body('cod').notEmpty().run(req);
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const booking = await bookingRepository.updateBooking(req.body, req.params.bookingId);

    res.json({ booking })
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getAllBookings,
  createBooking,
  deleteBooking,
  updateBooking,
  getBookingById,
}