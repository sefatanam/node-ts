import Course from './course.model';

const getAll = async () => {
  return await Course.find();
};

const create = async (name: string) => {
  return await new Course({name}).save();
};

const update = async (_id: any, name: string) => {
  return await Course.findByIdAndUpdate(_id, {name});
};


module.exports.getAll = getAll;
module.exports.create = create;
module.exports.update = update;
