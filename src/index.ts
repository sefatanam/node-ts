import express from 'express';
require('dotenv').config();
const app = express();
const courses = require('./courses/course.route');

require('./database')();
app.use(express.json());
app.use('/course', courses);

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
