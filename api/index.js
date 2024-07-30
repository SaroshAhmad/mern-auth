import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// const mongoURI = process.env.MONGO;
// console.log(`MongoDB URI: ${mongoURI}`); // For debugging; remove in production

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
})
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
