import mongoose from "mongoose"

const Schema = mongoose.Schema
const commandSchema = new Schema({
  command: String,
  address: String,
  scanoption: String,
  opt: String,
  numopt: Number,
  date: { type: Date, default: Date.now },
  result: String,
})
export default commandSchema
