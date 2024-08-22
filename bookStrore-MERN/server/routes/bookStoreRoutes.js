const express = require("express");
const router = express.Router()
const {Home,addBook, getAllBooks,updateBook} = require("../controllers/bookStoreController")

router.route("/").get(Home)
router.route("/addbook").post(addBook)
router.route("/getbooks").get(getAllBooks)
router.route("/updatebook/:id").put(updateBook)

module.exports = router;