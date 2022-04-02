require('express-async-errors');
import express from 'express';
require('dotenv').config();
console.log(`----------> Running on ${process.env.NODE_ENV?.toUpperCase()} environment. <----------`);

const app = express();
const courses = require('./courses/course.route');
require('./database')();
app.use(express.json());
app.use('/course', courses);
app.listen(process.env.PORT, () => console.log(`Listening on port : ${process.env.PORT}`));
