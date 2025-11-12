import mongoose from "mongoose"; // Importing mongoose to define schema

const productSchema = new mongoose.Schema({ // Defining the schema for Product
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
},
 { timestamps: true} // creating timestamps for each product entry
);

const Product = mongoose.model("Product", productSchema); // Creating the Product model

export default Product; // Exporting the Product model for use in other parts of the application