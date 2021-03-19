const mongoose = require('mongoose');

const schema = mongoose.Schema({
        title: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
}
);

const Article = mongoose.model('Article', schema);

module.exports = Article;