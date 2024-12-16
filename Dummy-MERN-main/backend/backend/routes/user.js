const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/createUser");
const { getUser } = require("../controller/getUsers");

//add the controllers to the routes 

router.post("/createUser", createUser);
router.get("/getallUsers", getUser);

module.exports = router;
