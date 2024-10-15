const Album = require('../models/album.models.js');

// Crear un álbum
const createAlbum = async (req, res) => {
    const album = new Album(req.body);
    try {
        await album.save();
        res.status(201).send(album);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Obtener todos los álbumes
const getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find();
        res.status(200).send(albums);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Obtener un álbum por ID
const getAlbumById = async (req, res) => {
    try {
        const album = await Album.findById(req.params.id);
        if (!album) {
            return res.status(404).send();
        }
        res.send(album);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Actualizar un álbum
const updateAlbum = async (req, res) => {
    try {
        const album = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!album) {
            return res.status(404).send();
        }
        res.send(album);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Eliminar un álbum
const deleteAlbum = async (req, res) => {
    try {
        const album = await Album.findByIdAndDelete(req.params.id);
        if (!album) {
            return res.status(404).send();
        }
        res.send(album);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createAlbum,
    getAllAlbums,
    getAlbumById,
    updateAlbum,
    deleteAlbum
};
