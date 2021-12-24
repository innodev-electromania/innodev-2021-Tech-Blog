import mongoose from "mongoose";
const Connection = async () => {
  try {
    const URL =
      "mongodb+srv://errorsquaduser:errorsquad123@techblog.92uvu.mongodb.net/Innodev?retryWrites=true&w=majority";
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected successfully");
  } catch (error) {
    console.log("Error while connecting to mongodB", error);
  }
};

export default Connection;
