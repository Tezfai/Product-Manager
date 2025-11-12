import mongoose from 'mongoose';
import Product from '../models/product.model.js';


export const getProducts = async (req, res) => {   
   
    try {  
        const products = await Product.find({});        
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log("error fetching products:", error);
        res.status(500).json({ success: false, message: 'Error fetching products' });
    }

}

export const createProduct = async (req, res) => {
    const product = req.body; //user will send product data in request body
    if (!product || !product.name || !product.price || !product.image) {
        return res.status(400).json({ success:false, message: 'Invalid product data' });
    }
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        console.log('MONGO_URI:', process.env.MONGO_URI);
        return res.status(201).json({ success: true, data: newProduct, message: 'Product saved successfully' });
    } catch (error) {
        console.error('Failed to save product:', error);
        return res.status(500).json({ success: false, message: 'Failed to save product' });
    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Product deleted successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Product not found' });
    };
};