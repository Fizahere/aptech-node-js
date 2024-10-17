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
import { uploadFile } from '../controllers/galleryController.js';
import { addStudent, getStudents } from '../controllers/studentController.js';

export const router = express.Router();

//user mode routes
router.get('/get-user', getUsers);
router.get('/get-user/:id', getUserById);
router.get('/search-user/:value', searchUser);
router.post('/create-user', createUser);
router.put('/update-user/:id', updateUserData)
router.patch('/update-user-data/:id', updateSpecificData)
router.delete('/delete-user/:id', deleteUserData)

//gallery model routes
router.post('/upload-file', uploadFile);

//student model routes
router.get('/get-students', getStudents);
router.post('/add-student', addStudent);