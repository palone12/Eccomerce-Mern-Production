import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongo DB Connected, ${conn.connection.host}`.bgYellow.white);
  } catch (error) {
    console.log(`Error in Mongo ${error}`.bgRed.white);
  }
};
export default connectDB;
