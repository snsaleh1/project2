const {Schema, model } = require('mongoose');


const userSchema = new Schema({
    
    // homevent: [homeventSchema],
    
    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
    },
    googleID: String,
    age: {
        type: Number,
        // required: true
    },
    birthDate: {
        type: Date,
        // required: true
    },
    interests: {
        type: String,
        // required: true
        //at least three required
    },
    ambitions: {
        type: String,
        // required: true,
    },

    
})

module.exports = model('User', userSchema);