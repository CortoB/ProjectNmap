import mongoose from "mongoose"
import commandSchema from "../schemas/CommandSchema.js"

const CommandModel = mongoose.model("AllCommand", commandSchema)

export default CommandModel
