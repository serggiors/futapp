const People = require("../models/people.js");

const getAllPeoples = async () => {
  const peoples = await People.findAll();

  return peoples;
};

const getPeopleById = async (peopleId) => {
  const people = await People.findByPk(peopleId);

  return people;
};

const createPeople = async (peopleData) => {
  try {
    const people = await People.create(peopleData);

    return people;
  } catch (error) {
    return error;
  }
};

const deletePeople = async (peopleId) => {
  try {
    const people = await People.destroy({
      where: {
        id: peopleId,
      },
    });

    return people;
  } catch (error) {
    return error;
  }
};

const updatePeople = async (peopleData, peopleId) => {
  try {
    await People.update(peopleData, {
      where: {
        id: peopleId,
      },
    });

    const people = await People.findByPk(peopleId);

    return people;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPeoples,
  createPeople,
  deletePeople,
  updatePeople,
  getPeopleById,
};
