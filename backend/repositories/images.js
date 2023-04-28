const Image = require("../models/image.js");

const getAllImages = async () => {
  const images = await Image.findAll();

  return images;
};

const getImageById = async (imageId) => {
  const image = await Image.findByPk(imageId);

  return image;
};

const createImage = async (imageData) => {
  try {
    const image = await Image.create(imageData);

    return image;
  } catch (error) {
    return error;
  }
};

const deleteImage = async (imageId) => {
  try {
    const image = await Image.destroy({
      where: {
        id: imageId,
      },
    });

    return image;
  } catch (error) {
    return error;
  }
};

const updateImage = async (imageData, imageId) => {
  try {
    await Image.update(imageData, {
      where: {
        id: imageId,
      },
    });

    const image = await Image.findByPk(imageId);

    return image;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllImages,
  createImage,
  deleteImage,
  updateImage,
  getImageById,
};
