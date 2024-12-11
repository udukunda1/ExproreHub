import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

import pharmaRoutes from './routes/pharmacy-routes.js';
import userRoutes from './routes/users-routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
app.use(bodyParser.json());
app.use('/uploads/images', express.static(path.join('uploads', 'images')));
// app.use(express.static(path.join('public')));

app.use(cors());

app.use('/pharma', pharmaRoutes);
app.use('/users', userRoutes);

// app.use((req, res, next) => {
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
// });

app.use((req, res, next) => {
  res.json({message: 'can not find this end point'});
});


mongoose.connect(`mongodb+srv://boy:1235@cluster0.kdnd2.mongodb.net/EHub`)
.then(() => {
    app.listen(process.env.PORT || 5000);
    console.log('connected');
})
.catch(error => {
    console.log('failed to connect to database', error);
})