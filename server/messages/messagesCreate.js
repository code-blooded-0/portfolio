import mongoose from "mongoose";
import messagesModel from "./messagesModel.js";

const messagesCreate = async (req, res, done) => {
  const { email, fName, lName, phone, company, message } = req.body;
  console.log( email, fName, lName, phone, company, message )

  const newMessage = await messagesModel.create({
    email, fName, lName, phone, company, message
  })
  res.status(200).json({success: true, message: message})

};

export default messagesCreate