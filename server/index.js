import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// old syntax for importing dependencies :
//const dependency = require('name_of_dependency');
//e.g : const express = require('express');

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit : "30mb" , extended: true}));
app.use(bodyParser.urlencoded({limit : "30mb" , extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://donte_mongodb:toujoursplus04@cluster0.qymah.mongodb.net/cluster0?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log('Server running on port: ${PORT}')))
.catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);