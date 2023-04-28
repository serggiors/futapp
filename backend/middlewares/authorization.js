const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = (req, res, next) => {
  try {
    const decodeToken = (err, decoded) => {
      if (err) {
        res.status(500).json({
          msg: 'Token no valido',
        });
      } else {
        User.findByPk(decoded.userId).then((user) => {
          req.user = user.dataValues;
          next();
        });
      }
    };

    const jwToken = req.headers.authorization;

    if (!jwToken) {
      return res.status(403).json({ msg: 'Acceso no autorizado' });
    }

    const verifyToken = jwToken.split(' ')[1];
    jwt.verify(verifyToken, process.env.JWT_KEY, decodeToken);
  } catch (err) {
    res.status(403).json({ msg: 'No autorizado' });
  }
};
