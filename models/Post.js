const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    country: {
        type: String,
        required: true,
    },
    wishes: {
        type: String,
        required: true,
    },
    data: {
        type: Date,
        default: Date.now,
    },

})

module.exports = mongoose.model('Post')