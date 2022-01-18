const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    phone: {
        type: String
    },
    photo: {
        type: String
    },
}, {
    collection: 'users'
})

module.exports = mongoose.model('User', User)