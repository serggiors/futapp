const express = require('express');
const authorization = require('../middlewares/authorization');
const {
  createUser,
  createUserBooking,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
  getAllUserBookingsById,
  login,
  signup,
} = require('../controllers/users.js');

const userRoutes = express.Router();

userRoutes.get('/',authorization, getAllUsers);
userRoutes.get('/:userId',authorization ,  getUserById);
userRoutes.post('/create', createUser);
userRoutes.put('/:userId',authorization,  updateUser);
userRoutes.delete('/:userId',authorization, deleteUser);
userRoutes.post('/:userId/booking/create/',authorization, createUserBooking);
userRoutes.get('/:userId/bookings', getAllUserBookingsById);
userRoutes.post('/login', login);
userRoutes.post('/signup', signup);

module.exports = userRoutes;
