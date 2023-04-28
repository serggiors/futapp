const express= require('express');
const authorization = require('../middlewares/authorization');

const {
	createRol,
	deleteRol,
	getAllRoles,
	getRolById,
	updateRol,
  } = require("../controllers/roles.js");

const rolRoutes = express.Router();

rolRoutes.get("/",authorization, getAllRoles);
rolRoutes.get("/:rolId",authorization, getRolById);
rolRoutes.post("/create/",authorization, createRol);
rolRoutes.put("/:rolId",authorization, updateRol);
rolRoutes.delete("/:rolId",authorization, deleteRol);

module.exports = rolRoutes;