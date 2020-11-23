const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
    person: {
        type: Number
    },
    accountnumber: {
        type: String
    }
});

const Account = mongoose.model('Account', schema);
module.exports = Account;