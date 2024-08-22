const express = require("express");
const router = express.Router()
const {Home,addBook} = require("../controllers/bookStoreController")

router.route("/").get(Home)
router.route("/addbook").post(addBook)

module.exports = router;