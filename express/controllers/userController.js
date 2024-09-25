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

export const updateUserData = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedData = req.body;
        const updateUserData = await User.findByIdAndUpdate(
            userId,
            { $set: updatedData },
            { new: true }
        )
        if (!updateUserData) {
            res.status(404).json({ message: "user not found." })
        }
        res.status(200).json({ message: "user updated." }, updatedData)
    } catch (error) {
        res.status(500).json({ message: "internal server error.", error })
    }
}

export const updateSpecificData = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: userData },
            { new: true }
        )
        if (!updatedUser) {
            res.status(400).json({ message: "user not found." })
        }
        res.status(200).json({ message: "user updated." })
    } catch (error) {
        res.status(500).json({ message: "internal server error." })
    }
}

export const deleteUserData = async (req, res) => {
    try {
        const userId = req.params.id;
        const deleteuser = await User.findByIdAndDelete(userId)
        if (!deleteuser) {
            res.status(400).json({ message: "user not found." })
        }
        res.status(200).json({ message: "user deleted." })
    } catch (error) {
        res.status(500).json({ message: "internal server error." })
    }
}

export const searchUser = async (req, res) => {
    try {
        const searchedValue = req.params.value;
        const result = await User.find({
            "$or": [
                { "name": { $regex: searchedValue } },
                { "email": { $regex: searchedValue } },
            ]
        });
        if (!searchedValue) {
            res.status(404).json({ message: "not found." })
        }
        res.status(200).json(result)
    } catch (error) {
        res.status(505).json({ message: "internal server error." })
    }
}