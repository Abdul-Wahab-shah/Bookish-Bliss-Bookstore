import Book from "../Model/book_model.js"

export const getBook= async(req,res)=>{
    try {
        const book= await Book.find()
        res.status(200).json(Book)
    } catch (error) {
        
    }
}