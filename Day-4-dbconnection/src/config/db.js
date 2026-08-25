const { default: mongoose } = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sumitbarnwal111_db_user:Sumit1234@cluster0.coazc0i.mongodb.net/",
    );
    console.log("mongoose is coonected");
  } catch (error) {
    console.log("error in db.js", error);
  }
};

module.exports = connectDb;
