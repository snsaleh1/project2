const {Schema, model } = require('mongoose');

const homeventSchema = new Schema({
    who: {
        type: String
    },
    what: {
        type: String
    },
    when: {
        type: Date
    },
    where: {
        type: String
    },
    Why: {
        type: String
    }

}),

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
    homevent: [homeventSchema],
    
});

module.exports = model('User', userSchema);