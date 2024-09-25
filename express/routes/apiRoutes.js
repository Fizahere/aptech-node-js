import express from 'express';
import {
    createUser,
    deleteUserData,
    getUserById,
    getUsers,
    searchUser,
    updateSpecificData,
    updateUserData
} from '../controllers/userController.js';

export const router = express.Router();

router.get('/get-user', getUsers);
router.get('/get-user/:id', getUserById);
router.get('/search-user/:value', searchUser);
router.post('/create-user', createUser);
router.put('/update-user/:id', updateUserData)
router.patch('/update-user-data/:id', updateSpecificData)
router.delete('/delete-user/:id', deleteUserData)
