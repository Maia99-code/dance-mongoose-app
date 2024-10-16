const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'El título es obligatorio'],
        minlength: 6,
        maxlength: 255
    },
    artist: {
        type: String,
        required: [true, 'El artista es obligatorio'],
        minlength: 10,
        maxlength: 255
    },
    releaseYear: {
        type: Number,
        required: [true, 'El año de lanzamiento es obligatorio'],
        min: 1900,
        max: 2100
    },
    genre: {
        type: String,
        required: [true, 'El género es obligatorio']
    }
}, { timestamps: true });

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;