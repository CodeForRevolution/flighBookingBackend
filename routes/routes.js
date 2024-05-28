const express = require("express")
const router = express.Router()

const {
	updateImage,
	getImage,
	getData,
	sendEmail,
	updateAbout,
	getAbout,
} = require("../controllers/controllers")
router.route('/').get((req,res,next)=>{
	res.send("FlightBook v2");
})
router.route("/updateImage/:id").put(updateImage)
router.route("/getImage").get(getImage)
router.route("/course/:id").get(getData)
router.route("/mail").post(sendEmail)
router.route("/update-about/:aboutID").put(updateAbout)
router.route("/get-about").get(getAbout)

module.exports = router
