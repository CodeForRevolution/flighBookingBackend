const mongoose = require("mongoose")

const mongodb_url = process.env.MONGODB_URL

mongoose
	.connect(mongodb_url,{ useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Database Connected")
	})
	.catch((e) => console.log(e))
