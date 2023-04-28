const peopleRepository = require ("../repositories/peoples.js");


const getAllPeoples = async (req, res) => {
  const peoples = await peopleRepository.getAllPeoples();

  res.status(200).json({ peoples });
};

const getPeopleById = async (req, res) => {
  const people = await peopleRepository.getPeopleById(req.params.peopleId);

  res.json({ people });
}

const createPeople = async (req, res) => {
  try {
    const people = await peopleRepository.createPeople(req.body);

    res.json({ people });
  } catch (error) {
    res.status(500).json({ error })
  }
}

const deletePeople = async (req, res) => {
  try {
    const people = peopleRepository.deletePeople(req.params.peopleId)

    res.json({ people });
  } catch (error) {
    res.status(500).json({ error })
  }
}

const updatePeople = async (req, res) => {
  try {
    const people = await peopleRepository.updatePeople(req.body, req.params.peopleId);

    res.json({ people })
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getAllPeoples,
  createPeople,
  deletePeople,
  updatePeople,
  getPeopleById,
}