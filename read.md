·· metodos que funcionan

 
// Crear un álbum
router.post('/', albumController.createAlbum);

http://localhost:3000/albums

{
  "title": "almbum 2",
  "artist": "Artista Ejemplar",
  "releaseYear": 2025,
  "genre": "metal"
}


// Obtener todos los álbumes
router.get('/', albumController.getAllAlbums);

http://localhost:3000/albums

[
  {
    "_id": "670f3f369913ee18ae79039f",
    "title": "Nuevos Sonidos",
    "artist": "Artista Ejemplar",
    "releaseYear": 2025,
    "genre": "metal",
    "createdAt": "2024-10-16T04:21:10.730Z",
    "updatedAt": "2024-10-16T04:26:04.400Z",
    "__v": 0
  },
  {
    "_id": "670f40b69913ee18ae7903a6",
    "title": "almbum 2",
    "artist": "Artista Ejemplar",
    "releaseYear": 2025,
    "genre": "metal",
    "createdAt": "2024-10-16T04:27:34.435Z",
    "updatedAt": "2024-10-16T04:27:34.435Z",
    "__v": 0
  }
]


funciona 




// Obtener un álbum por ID
router.get('/:id', albumController.getAlbumById);

http://localhost:3000/albums/670f40b69913ee18ae7903a6
{
  "_id": "670f40b69913ee18ae7903a6",
  "title": "almbum 2",
  "artist": "Artista Ejemplar",
  "releaseYear": 2025,
  "genre": "metal",
  "createdAt": "2024-10-16T04:27:34.435Z",
  "updatedAt": "2024-10-16T04:27:34.435Z",
  "__v": 0
}

funciona



// Actualizar un álbum
router.put('/:id', albumController.updateAlbum);
http://localhost:3000/albums/670f40b69913ee18ae7903a6

{
  "title": "almbum 2",
  "artist": "Artista Ejemplar",
  "releaseYear": 2030,
  "genre": "metal"
}

resultado

{
  "_id": "670f40b69913ee18ae7903a6",
  "title": "almbum 2",
  "artist": "Artista Ejemplar",
  "releaseYear": 2030,
  "genre": "metal",
  "createdAt": "2024-10-16T04:27:34.435Z",
  "updatedAt": "2024-10-16T04:34:14.933Z",
  "__v": 0
}

// Eliminar un álbum
router.delete('/:id', albumController.deleteAlbum);

http://localhost:3000/albums/670f40b69913ee18ae7903a6




todos los metodos funcionan correctamente 