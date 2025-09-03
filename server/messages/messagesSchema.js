import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messagesSchema = new Schema({
  email: {
    type: String,
    default: "",
  },
  fName: {
    type: String,
    default: "",
  },
  lName: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  company: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default messagesSchema