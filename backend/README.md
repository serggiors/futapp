# api_rest Nodejs express_sequelize_MySQL
# actualizacion repo backend
api rest express sequelize MySQL <br>

/api/ > ruta principal <br>
users (usuarios)
/api/users/create/ > POST > crear registro de usuario <br>
/api/users > GET > ver todos los usuarios <br>
/api/users/id > GET > mostrar registro por id de usuario<br>
/api/users/id > DEL > eliminar registro por id del user<br>
/api/users/userId/booking/create/ > POST > crear reserva por id de usuario<br>
/api/users/userId/bookings/ > GET > mostrar todas las reservas por id de usuario<br>

roles (roles)
/api/roles <br>

images (imagenes)
/api/images <br>

peoples (personas)
/api/peoples/<br>

soccerfields (campo de futbol)
/api/soccerfields <br>

bookings (reservas)
/api/bookings<br>

Roles PreCargados
Admin, Superadmin, User
Canchas Precargadas
fut5, fut7, fut11

Login > /api/users/login al ingresar genera un token que le va a permitir ingresar a todas las rutas de la api.<br>
Registro > /api/users/create al registrar codifica la password.