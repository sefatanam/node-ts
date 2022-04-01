import mongoose from 'mongoose';


const couseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});


const Course = mongoose.model('Course', couseSchema);


export default Course;
