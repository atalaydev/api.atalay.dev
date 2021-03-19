const Articles = require('../models/article.model');

const createArticle = async (body) => {
    const instance = await Articles.create({
        title: 'testing..'
    });
    return instance; 
}

const getArticle = async (body) => {
    return await Articles.find(); 
}

module.exports = {
    createArticle,
    getArticle
};