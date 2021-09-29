const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      ` Database Connected on ${conn.connection.host}:${conn.connection.port} `
        .green.inverse
    );
    console.log("");
  } catch (error) {
    console.error(`Error : ${error.message}`.red);

    console.log(error);
  }
};

module.exports = connectDb;
