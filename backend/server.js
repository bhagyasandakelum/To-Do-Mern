import express from 'express';
import todoRoutes from './routes/todo.route.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/todos", todoRoutes);
app.listen(5000, ()=>{
    connectDB();
    console.log("server started at http://localhost:5000");
});

