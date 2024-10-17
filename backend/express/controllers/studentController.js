import Students from "../models/studentModel.js";

export const getStudents = async (req, res) => {
    try {
const results = await Students.find().populate('faculty');
        res.status(200).json({ results });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error.' });
    }
};


export const addStudent = async (req, res) => {
    try {
        const { name, faculty } = req.body;
        const newStudent = new Students({
            name, faculty,
        })
        await newStudent.save();
        if (!newStudent) {
            res.status(400).json({ message: 'student not found.' });
        }
        res.status(201).json({ message: 'student added.' })
    } catch (error) {
        res.status(500).json({ message: 'internal server error.' })
    }
}