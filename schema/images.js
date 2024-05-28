const mongoose = require("mongoose")

const imageSchema = new mongoose.Schema(
	{
		page: String,
		title: String,
		desc: String,
		purchase_url: String,
		image_public_id: String,
		image_url: String,
		uploadDate: {
			type: Date,
			default: Date.now(),
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model("course", imageSchema)
