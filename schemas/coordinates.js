require('dotenv').config();
const mongoose = require('mongoose');

const CoordinatesSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    x: { type: Number, min: 0, max: 1000 },
    y: { type: Number, min: 0, max: 1000 },
    lastUpdate: {
        type: Date,
        default: Date.now,
        expires: process.env.COORDINATE_EXPIRE_TIME,
    }
});

CoordinatesSchema.index({ username:1 }, { "unique": true });
module.exports = mongoose.model("coordinates", CoordinatesSchema);