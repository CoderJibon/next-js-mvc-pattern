import mongoose from "mongoose";

const mongoDBConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/next-js-mvc-pattern");
    console.log("database connection established");
  } catch (error) {
    console.log(error.message);
  }
};

export default mongoDBConnection;
