import { config } from 'dotenv';
config();

import cloudinary from 'cloudinary'
import fs from 'fs'//file system 

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});


const fileUploadOncloudnary = async (localFilePath) => {
    try {
        
        console.log(`File path is ${localFilePath}`);
        
        if (!localFilePath) {
            return null
        }
        //upload on clodnary
        const response = await cloudinary.uploader.upload(localFilePath, {
            //which type of image we can save it
            resource_type: "auto",
        })
        if(!response){
            return 'upload  failed'
        }
        // file has been upload successfully
        console.log('file uploaded on cloudinary', response.url)
        fs.unlinkSync(localFilePath)
        return response

    } catch (error) {
        //remove locally file save temporary file as the uplaod operation got failed
        console.log(error.message);
        fs.unlinkSync(localFilePath)
        return null

    }

}
export default fileUploadOncloudnary ;