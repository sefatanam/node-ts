const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect(process.env.CONNECTION_STRING, {
    dbName: process.env.DATABASE_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log(`Database is connected. Running on [ ${process.env.NODE_ENV?.toUpperCase()} ] environment.`);
  }).catch((err:any) => {
    console.log(err.message);
  });
};
