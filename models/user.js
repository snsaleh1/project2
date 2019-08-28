const {Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: String,
    email: String,
    googleID: String,
    age: Number,
    birthDate: Date,
    interests: String,
    ambitions: String
}, {
    timestamps: true
});


module.exports = model('User', userSchema);
