
import User from '../Model/USer.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
//register
export const registerUser=async(req,res,next)=>{
    try {
        const {name,email,password,phone}=req.body;
        if (!name || !email || !password || !phone)
        {
            return res.status(400).json({
                success:false,
                message:'All field are required'

            })
        }

    //check password is greater than 6

        if(password.length < 6){
            return res.status(400).json({
                success:false,
                message:'password must be greater then 5 digit'
            });
        }
        
    // 🔐 Hash password before saving

        const salt = await bcrypt.genSalt(10); // Generate salt
        const hashedPassword = await bcrypt.hash(password, salt); // Hash password

    //find user exist or not

    const existuser= await User.findOne({email})    
    if (existuser){
        return res.status(400).json({
            message:"user is already exist",
            success:false
        })
    }

    //create new  user

        const user=await User.create({
            name,
            email,
            password :hashedPassword,
            phone

        })

    
    
        if(!user){
            return res.status(400).json({
                success : false,
                message : 'User Registration Failed ..!!!'
            })
        }

        console.log(user)
        res.status(201).json({ 
            success:true,
            message: "User registered successfully!"
         });
            

        
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : error.message
        })
        
    }

}
//login
export const loginUser=async(req,res)=>{
 try {
     const {email,password}=req.body;
     const user = await User.findOne({ email });
     console.log(user)
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password"
            });
        }
        // 🔑 Compare entered password with stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password"
            });
        }
        // 🔑 Generate JWT Token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.ACCESS_TOKEN_SECRET,  // secret key
            { expiresIn: "7d" }  // Token expires in 7 days
        );
    
        // 🥠 Save Token in Cookie
        res.cookie("token", token, {
            httpOnly: true, // Prevents JavaScript access
            secure: true,
            sameSite: "strict", // Prevents CSRF attacks
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days expiration
        });
        
        res.status(200).json({
            success: true,
            message: "Login successful",
            token
        });
   
 } catch (error) {
    return res.status(400).json({
        message:error.message,
        success:false
    })
    
 }

}
//user logout controller
export const logoutUser = async(req,res,next) =>{
    try {
        res.cookie('token',null,{
            maxAge:0,
            secure : true,
            httpOnly : true
        })

        res.status(200).json({
            success:true,
            message:'User Logout Successfully..'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : error.message
        })
    }
}