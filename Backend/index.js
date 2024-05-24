import  express  from 'express';
import dotenv from "dotenv"
const app = express()
const port = process.env.PORT || 4000;

dotenv.config()


app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})