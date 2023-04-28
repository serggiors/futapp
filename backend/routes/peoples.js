const express= require('express');

const {
	createPeople,
	deletePeople,
	getAllPeoples,
	getPeopleById,
	updatePeople,
  } = require("../controllers/peoples.js");

const peopleRoutes = express.Router();

peopleRoutes.get("/", getAllPeoples);
peopleRoutes.get("/:peopleId", getPeopleById);
peopleRoutes.post("/create/", createPeople);
peopleRoutes.put("/:peopleId", updatePeople);
peopleRoutes.delete("/:peopleId", deletePeople);

module.exports = peopleRoutes;