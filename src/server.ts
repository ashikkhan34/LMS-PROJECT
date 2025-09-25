import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";

main().catch(err => console.log(err));
import app from "./index.js"
const PORT = process.env.PORT || 4000

async function main() {
  await mongoose.connect(process.env.MONGODB_URL as string);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
   app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
}