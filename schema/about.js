const mongoose = require("mongoose")

const aboutSchema = new mongoose.Schema({
	position: String,
	username: String,
	skills: String,
	whatsapp_number: String,
	description: String,
	thumbnail: String,
	thumbnail_location: String,
})

module.exports = mongoose.model("about", aboutSchema)
