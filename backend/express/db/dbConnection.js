import mongoose from "mongoose";

const connectDb=async()=>{
    try {
        await mongoose.connect(
            'mongodb+srv://fizabatool0278:lQop8BhHBLZsuF3I@cluster0.nrqwr.mongodb.net/practice?retryWrites=true&w=majority&appName=Cluster0'
        )
        console.log('db connected')
    } catch (error) {
        console.log('cannot connect',error)
    }
}

export default connectDb