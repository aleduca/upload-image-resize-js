const express = require("express");
const Image = require("../controllers/Image");

const router = express.Router();

router.post("/", Image.upload);

module.exports = router;
