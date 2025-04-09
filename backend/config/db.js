import mongoose from 'mongoose';

export const connectDB = () => {
    // Connect to the database
    try{
        mongoose.connect(process.env.MONGO_URI, {});
        console.log(`MongoDB connected...`);
    }catch(err){
        console.error(`Error: ${err.message}`);
        process.exit(1); // Exit the process with failure
    }
}