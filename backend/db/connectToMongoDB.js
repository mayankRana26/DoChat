import mongoose from "mongoose"; 

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("database conected successfully");
    } catch (error) {
        console.log("error conecting to MongoDB",error.message);
    }
}

export default connectToMongoDB