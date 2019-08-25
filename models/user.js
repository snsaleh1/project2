const {Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
    },
    googleID: String,

    age: {
        type: Number
    },
    birthDate: {
        type: Date
    },
    interests: {
        type: String
    },
    ambitions: {
        type: String
    },      
});


module.exports = model('User', userSchema);
