import  express  from 'express';
import dotenv from "dotenv"
import mongoose from 'mongoose';
import BookRoute from "./Route/book_route.js"
const app = express()
const port = process.env.PORT || 4000;


dotenv.config()
const URL=process.env.MONGODBURL;


// database connection 

try {
  mongoose.connect(URL)
  console.log("connect to mongodb")
} catch (error) {
  console.log("database Error",error)
}

// define routes
app.use("/book",BookRoute)


app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})