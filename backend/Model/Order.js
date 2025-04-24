const mongoose=require('mongoose');
const { Schema} =mongoose;

const orderItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    quantity:{
        type:Number,
        required:true

    }
})

const userSchema= new Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",

    },
   
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address",
    },
    orderItem:{
        type:[orderItemSchema]
    },
    status:{
        type:String,
        enum:['PENDING','CANCELLED','DELIVERED'],
        default:"PENDING"
    }
},{timestamps:true})
const User=mongoose.model('User',userSchema)

module.exports=User