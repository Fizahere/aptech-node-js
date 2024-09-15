import express from 'express';
import { createUser, getUserById, getUsers } from '../controllers/userController.js';

export const router = express.Router();

router.get('/get-user', getUsers);
router.get('/get-user/:id', getUserById);
router.post('/create-user', createUser);
