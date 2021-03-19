const articleService = require('../services/articles.service');

const createArticle = async (req, res) => {
    const article = await articleService.createArticle(req.body);
    res.status(200).send(article);
};

const getArticle = async (req, res) => {
    const data = await articleService.getArticle(req.body);
    res.status(200).send(data);
};

module.exports = {
    createArticle,
    getArticle
};