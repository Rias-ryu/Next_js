import { log } from "console";
import mongoose from "mongoose";

export async function Connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection

        connection.on('connected' , () => {
            console.log(`DataBase connected Sucessfully ${connection.db}`);
            
        })
        connection.on("Error" , (err) => {
            console.log(`Connection to DataBase Failed ${err}`);
            process.exit()
        })
    } catch (error) {
        console.log(`Something Went Wrong ${error}`);
        
    }
}