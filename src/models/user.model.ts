import { Schema, model } from "mongoose";

import { User } from "../types/user.types";

const sessionTokenSchema = new Schema(
  {
    token: { type: String },
    expiresAt: { type: Number },
  },
  { _id: false }
);

const UserSchema = new Schema<User>(
  {
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    avatar: {
      type: String,
      required: false,
    },
    allergies: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: false,
      default: 0,
      min: 0,
      max: 120,
    },
    gender: {
      type: Number,
      required: false,
      enum: [0, 1, 2],
      default: 0,
    },
    lastLogin: {
      type: Date,
      required: false,
    },
    sessionToken: sessionTokenSchema,
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.password; // Exclude password from the response
        delete ret.sessionToken; // Exclude sessionToken from the response
        return ret;
      },
    },
    toObject: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.password; // Exclude password from the response
        delete ret.sessionToken; // Exclude sessionToken from the response
        return ret;
      },
    },
  }
);
const UserModel = model<User>("User", UserSchema);
export default UserModel;
