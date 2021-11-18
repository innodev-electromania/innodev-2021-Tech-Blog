import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    usinque: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmedPassword: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const register = mongoose.model("register", UserSchema);

export default register;
