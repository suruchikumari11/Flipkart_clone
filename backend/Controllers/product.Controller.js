import Product from '../Model/Product.js'; 

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products from DB
        res.status(200).json(products);
        console.log(products);
    } catch (error) {
        res.status(500).json({ 
            message: "Error fetching products", 
            error: error.message 
        });
    }
};
