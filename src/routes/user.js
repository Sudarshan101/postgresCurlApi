import { Router } from 'express';
const router = Router();
import "@babel/polyfill"

import { createUser, getUser, getUsers, deleteUser, updateUsers } from '../controllers/users.controller';


router.post('/getUsers', getUsers);
router.post('/getUser', getUser);
router.post('/create', createUser);
router.delete('/removeUser', deleteUser);
router.put('/updateUser', updateUsers);


export default router;