const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect(process.env.CONNECTION_STRING, {
    dbName: process.env.DATABASE_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log(`Database is connected on : ${process.env.NODE_ENV?.toUpperCase()}`);
  }).catch((err:any) => {
    console.log(err.message);
  });
};
