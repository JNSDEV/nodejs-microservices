const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  email: {
    type: String
  },
  lastname: {
    type: String
  },
  firstname: {
    type: String
  },
  password: {
    type: String
  }
});

const Person = mongoose.model('Person', schema);
module.exports = Person;