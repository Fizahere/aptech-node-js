import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    image: String,
})

const Gallery = mongoose.model('Gallery', gallerySchema)

export default Gallery;