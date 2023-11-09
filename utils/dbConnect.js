import mongoose from 'mongoose';

const dbConnect = async function () {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  // console.log(process.env.DB_URI);
  mongoose.connect(process.env.DB_URI);
};

export default dbConnect;
