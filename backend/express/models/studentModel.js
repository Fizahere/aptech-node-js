import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    faculty: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
});

const Students = mongoose.model('Students', studentSchema);

export default Students;
