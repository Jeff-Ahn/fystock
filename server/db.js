const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
module.exports = () => {
  mongoose.connect(
    'mongodb+srv://admin:1234@cluster0.o2naz.mongodb.net/FYS?retryWrites=true&w=majority',
    function (err) {
      if (err) {
        console.error('mongodb connect failed', err);
      }
      console.log('mongodb connected');
    }
  );
  const db = mongoose.connection;
};
require('./model/Financial.js');
