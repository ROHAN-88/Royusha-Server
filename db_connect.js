import mongoose from "mongoose";

const db_connect = async () => {
  const db_url =
    process.env.MONGO_URL ||
    "mongodb+srv://therohanshrestha6655:m51VMBYhAkmL3YlV@cluster0.gpvkzma.mongodb.net/Royusha-social-media?retryWrites=true&w=majority";
  try {
    await mongoose.connect(db_url);
    console.log("Database : OK");
  } catch (e) {
    console.log("Database connection error");
    console.log(e.message);
  }
};

export default db_connect;
