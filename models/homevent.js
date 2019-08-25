const {Schema, model } = require('mongoose');

const commentSchema = new Schema({
    content: String
});

const homeventSchema = new Schema({
    who: {
        type: String
    },
    what: {
        type: String,
        enum: ["Breakfast", "Lunch", "Dinner", "Coffee/Drinks", "Activity", "Trip"]
    },
    when: {
        type: Date
    },
    where: {
        type: String
    },
    Why: {
        type: String
    },
    comment: [commentSchema]
});

module.exports = model('Homevent', homeventSchema);
