const {Schema, model } = require('mongoose');

const resultSchema = new Schema ({
    name:  String,
    image_url: String,
    rating: Number,
    address: String,
    display_phone: String
});

const commentSchema = new Schema({
    content: String
});

const homeventSchema = new Schema({
    who: {
        type: String
    },
    what: {
        type: String,
        enum: ["Breakfast", "Lunch", "Dinner", "Coffee", "Activity", "Trip"]
    },
    when: {
        type: Date
    },
    where: String,

    result:[resultSchema],

    Why: {
        type: String
    },
    comment: [commentSchema]
});

module.exports = model('Homevent', homeventSchema);
