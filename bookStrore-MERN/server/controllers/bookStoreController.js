const {book} = require("../models/bookModel")

exports.Home = (req, res, next) => {
  return res.status(200).send( "Welcome to the Book Store!" );
};

//* add a new book
exports.addBook = async(req, res, next) => {
    try {
      const { title, author, publishYear } = req.body;

      // Validate input
      if (!title || !author || !publishYear) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const newBook = await book.create({ title, author, publishYear });

      return res.status(201).json({ success: true, data: newBook });
    } catch (error) {
        console.log(error);
        next(error);
        
    }
}
