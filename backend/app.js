import { config } from 'dotenv';
config();

import userRouter from '../backend/Routers/userRouter.js'
import productRouter from '../backend/Routers/productRouter.js'
import cookieParser from 'cookie-parser';
import express from 'express';
import cors from "cors";
const app = express(); 

app.use(cors());




app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


app.use(express.json());
//router 


app.use('/api/auth/users',userRouter)
app.use('/api/auth',userRouter)
app.use('/api/home',productRouter)
//http://localhost:8000/api/auth/users/register


export default app;
