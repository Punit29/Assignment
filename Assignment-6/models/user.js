const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    history: String
});

const Users = mongoose.model('users', userSchema);

module.exports = Users;