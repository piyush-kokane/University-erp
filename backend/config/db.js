const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const dbName = mongoose.connection.name;
    console.log("✔️ㅤMongoDB Connected, database:", dbName);
  }
  catch (error) {
    console.error("❌ Database Connection Error:", error);
    process.exit(1);
  }
};


module.exports = connectDB;
