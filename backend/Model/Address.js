const mongoose=require('mongoose')
const { Schema} =mongoose;
const addressSchema=new Schema(
    {

    state:{
        type:String,
        required:true,
        lowercase: true
    },
    city:{
        type:String,
        required:true,
        lowercase: true,
    },
    house_name:{
        type:String,
        required:true,
        lowercase: true
        
    },
    pincode:{
        type:Number,
        type:required,

    },
    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    phone_number:{
        type:Number,
        type:required,

    }
    

}
)
const Address=mongoose.model('Address',addressSchema)

module.exports=Address
