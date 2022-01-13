import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmedPassword: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  // const passwordHash = await bcrypt.hash(this.password,10);
  if (this.isModified("password")) {
    console.log("Now the password is ", this.password);
    this.password = await bcrypt.hash(this.password, 10);
    console.log("Now the password is ", this.password);
    this.confirmedPassword = undefined;
  }
  next();
});
const User = mongoose.model("user", UserSchema);

export default User;
