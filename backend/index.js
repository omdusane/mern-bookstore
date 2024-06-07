import express, { response } from "express";
import {PORT, MONGOURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//middleware
app.use(express.json());
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods:['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }))
app.use(cors());
app.use('/books', booksRoute);


app.get('/', (req,res)=>{
    return res.status(200).send('Homee')
})





mongoose.connect(MONGOURL).then(()=>{
    console.log('Database connected');
    
    app.listen(PORT, ()=>{
        console.log(`App is started on port: ${PORT}`);
    });
}).catch((e)=>{
    console.log(e);
})