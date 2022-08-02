import mongoose from "mongoose";
import { User } from "../types/User";

const Schema = mongoose.Schema;

export const userSchemma = new Schema<User>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  valid: {
    type: Boolean,
    default: true,
  },
});

userSchemma.virtual("hats", {
  ref: "Hat",
  localField: "_id",
  foreignField: "owner",
});
userSchemma.set("toJSON", { virtuals: true });
userSchemma.set("toObject", { virtuals: true });
