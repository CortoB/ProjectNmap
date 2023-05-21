import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import makeCommandRoutes from "./routes/makeCommandsRoutes.js"

const app = express()
const ctx = { app }

mongoose
  .connect("mongodb://127.0.0.1:27017/Command", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("You are connected to MongoDB")
  })
  .catch((error) => {
    console.error("Connection to MongoDB failed:", error)
  })

app.use(cors())
app.use(express.json())

makeCommandRoutes(ctx)

app.listen(3005, () => console.log("Listening on port 3005"))
