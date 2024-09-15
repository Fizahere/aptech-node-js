import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
        res.status(200).json({ message: "data fetched successfully." })
    } catch (error) {
        res.status(500)
    }
}

export const getUserById = async (req, res) => {
    try {
        const employee = await User.findById(req.params.id)
        if (!employee) {
            res.status(400).json({ message: 'not found', error: error.message })
        }
        res.json(employee)
    } catch (error) {
        res.status(500).json({ message: 'internal server error', error: error.message })
    }
}

export const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = new User({
            name,
            email
        });
        const user = await newUser.save();
        res.json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};


