import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.routes.js';
import path from 'path';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Enable CORS so frontend (vite/dev) can call the API on a different port
app.use("/api/products", productRoutes); // Use product routes

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // ✅ Express 5 compatible wildcard
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}


// Connect to DB first, then start the server
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server started at http://localhost:' + PORT);
        });
    })

    .catch((err) => {
        console.error('Failed to start server — DB connection error:', err);
        process.exit(1);
    });