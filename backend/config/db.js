const mongoose = require('mongoose');
const mongodbURI = process.env.MONGODB_URI

const connectDB = async () => {
    try {
        await mongoose.connect(mongodbURI);
    } catch(error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;