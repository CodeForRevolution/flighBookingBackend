require("dotenv").config()
const About=require('./schema/about')
const Course=require('./schema/images')
const express = require("express")
require("./database/config")
const app = express()
const cors = require("cors")

const fileUpload = require("express-fileupload")
app.use(
	fileUpload({
		useTempFiles: true,
	})
)
const routes = require("./routes/routes")
app.use(express.json())
app.use(cors());



app.use("/", routes)



const PORT = process.env.PORT || 8000

const startServer = async () => {

	console.log("your local host putting data");
	try {
		app.listen(PORT, () => {
			console.log(`connected to PORT: ${PORT}`)
		})
	} catch (error) {
		console.log(error)
	}
}
startServer()
