import mongoose, {ConnectOptions} from "mongoose";


let isConnected: boolean = false;
 export const connectDatabase = async () => {
    mongoose.set("strictQuery", true);
    
    if (!process.env.MONGODB_URL){
        throw new Error("MONGODB_URL not found");
    }
    if(isConnected){
        return;
    }
    try {
        const options: ConnectOptions ={
            dbName: "netflix",
            autoCreate: true,
        }
        await mongoose.connect(process.env.MONGODB_URL, options);

        isConnected = true;
        console.log("MongoDB connected successfully");

    }catch (e) {
        console.log("MongoDB connection error. Please make sure MongoDB is running")
    }
 }