import express from 'express';
import {forgotPasswordController, getOrderController, loginController,registerController,testController, upadateProfileController} from '../controllers/authController.js';
import { isAdmin,requireSignIn } from '../middlewares/authMiddleware.js';
//route object
const router =express.Router()
//routing
//Register || Method Post
router.post('/register',registerController)
//LOGIN || POST
router.post('/login',loginController)
//forgot Password
router.post("/forgot-password",forgotPasswordController)
//test
router.get('/test',requireSignIn,isAdmin,testController)
//protected User route auth
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})
//protected Admin route auth
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})
//update profile
router.put("/profile", requireSignIn, upadateProfileController);
//orders 
router.get('/orders', requireSignIn,getOrderController)
export default router;