const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema ({

    name: {
        type: String,
        required: true
    }
});

module.exports = Category = mongoose.model('categories', CategorySchema);
