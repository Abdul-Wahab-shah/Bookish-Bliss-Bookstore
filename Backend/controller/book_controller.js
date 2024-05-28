import Book from "../Model/book_model.js";

export const getBook = async (req, res) => {
  try {
    const books = await Book.find();  // Fetch all books from the database
    res.status(200).json(books);  // Return the fetched books in the response
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error" });  // Return error response in case of failure
  }
};