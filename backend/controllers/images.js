const imageRepository = require ("../repositories/images.js");


const getAllImages = async (req, res) => {
  const images = await imageRepository.getAllImages();

  res.status(200).json({ images });
};

const getImageById = async (req, res) => {
  const image = await imageRepository.getImageById(req.params.imageId);

  res.json({ image });
}

const createImage = async (req, res) => {
  try {
    const image = await imageRepository.createImage(req.body);

    res.json({ image });
  } catch (error) {
    res.status(500).json({ error })
  }
}

const deleteImage = async (req, res) => {
  try {
    const image = imageRepository.deleteImage(req.params.imageId)

    res.json({ image });
  } catch (error) {
    res.status(500).json({ error })
  }
}

const updateImage = async (req, res) => {
  try {
    const image = await imageRepository.updateImage(req.body, req.params.imageId);

    res.json({ image })
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getAllImages,
  createImage,
  deleteImage,
  updateImage,
  getImageById,
}