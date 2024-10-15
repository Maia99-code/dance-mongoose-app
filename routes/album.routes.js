const express = require('express');
const router = express.Router();
const albumController = require('../controllers/album.controllers.js');

// Crear un álbum
router.post('/', albumController.createAlbum);

// Obtener todos los álbumes
router.get('/', albumController.getAllAlbums);

// Obtener un álbum por ID
router.get('/:id', albumController.getAlbumById);

// Actualizar un álbum
router.put('/:id', albumController.updateAlbum);

// Eliminar un álbum
router.delete('/:id', albumController.deleteAlbum);

module.exports = router;
