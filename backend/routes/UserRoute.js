import express from 'express'
import {loginUser,registerUser} from "../controllers/UserController.js"
import Route from 'react-router-dom'
import { Link } from 'react-router-dom'


const userRouter = express.Router();


userRouter.post('/login',loginUser)
userRouter.post('/register',registerUser)

export default userRouter;