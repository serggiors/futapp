const express= require('express');
const {
	createBooking,
	deleteBooking,
	getAllBookings,
	getBookingById,
	updateBooking,
  } = require("../controllers/bookings.js");

const bookingRoutes = express.Router();

bookingRoutes.get("/", getAllBookings);
bookingRoutes.get("/:bookingId", getBookingById);
bookingRoutes.post("/create/", createBooking);
bookingRoutes.put("/:bookingId", updateBooking);
bookingRoutes.delete("/:bookingId", deleteBooking);

module.exports = bookingRoutes;