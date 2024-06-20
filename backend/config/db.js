import mongoose from "mongoose";

const connectToDB = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MogoDB')
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectToDB;