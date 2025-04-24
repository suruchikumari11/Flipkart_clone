import Product from "../Model/Product.js";
import  fileUploadOncloudnary  from "../utili/cloudnary.js";

export const admin = async(req,res)=>{
    try {
        const { name, price, description, categories } = req.body;
        
        // console.log("File --> ",req.file);
       

        if (!req.file || !name || !price || !description || !categories) {
            return res.status(400).json({ message: "All fields including image are required" });
        }

        // const imageUrl =req.file.path; // Cloudinary returns file URL in `req.file.path`
        let imageURL = "";
        if(req.file){
            imageURL = await fileUploadOncloudnary(req.file.path);
            console.log("ImageURL - ",imageURL.url);
        }


        const newProduct = await Product.create({
            name,
            price,
            image:imageURL.url,
            description,
            categories
        });



      res.status(201).json({
        message: "Product added successfully!",
        product: newProduct 
    });
} catch (error) {
    res.status(500).json({
         message: "Error saving product",
          error: error.message 
        });
    }
};

