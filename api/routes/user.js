import express from 'express';
import { createUser, DeleteUser, getAllUser, getSingleUser, updateUser, userLogin, userRegister, getLoggedInUser, verifyUserAccount, recoverPassword, resetPassword } from '../controller/userController.js';
import { adminMiddleware } from '../middlewares/adminMiddleware.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { userMiddleware } from '../middlewares/userMiddleware.js';



//init router
const router = express.Router();


//User Auth Route
router.post('/login', userLogin);
router.post('/register', userRegister);
router.get('/me', getLoggedInUser);
router.post('/verify', verifyUserAccount);
router.post('/recover-password', recoverPassword);
router.post('/reset-password', resetPassword);


//route Rest api
router.route('/').get(adminMiddleware, getAllUser).post(adminMiddleware, createUser);
router.route('/:id').get(userMiddleware, getSingleUser).delete(userMiddleware, DeleteUser).put(userMiddleware, updateUser).patch(userMiddleware, updateUser);





//export default router
export default router;