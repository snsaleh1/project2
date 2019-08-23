var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    
})

var spSchema = new Schema({
    profilePic: {
        type: Image
    },
    name: {
        type: "String",
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    interests: {
        type: "String",
        required: true
        //at least three required
    },
    ambitions: {
        type: "String",
        required: true,
    },

})