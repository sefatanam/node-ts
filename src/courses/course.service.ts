import Course from './course.model';

const getAll =async () => {
  return await Course.find();
};

const create = async (name: string) => {
  return await new Course({name}).save();
};

module.exports.getAll = getAll;
module.exports.create = create;
