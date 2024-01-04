import {model, models, Schema} from "mongoose";

const MessageSchema = new Schema({
  fullName: String,
  senderEmail: String,
  comment: String,
}, {timestamps: true});

export const Message = models?.Message || model('Message', MessageSchema);