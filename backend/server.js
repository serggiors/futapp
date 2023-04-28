const express = require("express");
const apiRoutes = require("./routes");
const db = require("./models");
const app = express();
const config = require("./config.js");
const cors = require('cors');


const corsOpts = {
	origin: '*',
  
	methods: [
	  'GET',
	  'POST',
	],
  
	allowedHeaders: [
	  'Content-Type',
	],
  };
  
app.use(cors(corsOpts));

app.use(express.json()); //aceptar recibir y enviar json en nuestra api


app.use("/api", apiRoutes);

app.get("/api", (req, res) => {
	res.send("Bienvenido a la api, Registrate!!");
})

db.sync().then(() => {
	console.log("Conectado a la base de datos")
}).catch(() => {
	console.log("Hubo un error al conectarse a la base de datos")
})

app.listen(config.SERVER_PORT, "localhost", () => {
	console.log("Servidor funcionando en puerto", config.SERVER_PORT);
});