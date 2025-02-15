const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;