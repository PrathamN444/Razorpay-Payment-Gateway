import mongoose from "mongoose"

export const connectToDB = async () => {
    const {connection} = await mongoose.connect(process.env.MONGO_URI,{
        dbName: "payment_gateway_data"
    })
    console.log(`server connected to ${connection.host}`);
}