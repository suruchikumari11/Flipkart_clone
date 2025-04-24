import { Router } from "express";
import { upload } from "../middleware/mullter.js";
import { registerUser,loginUser } from "../Controllers/user.Controller.js";
import {admin} from "../Controllers/admin.Controller.js";
const router = Router()
 
router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/admin',upload.single("image"),admin)

export default router;