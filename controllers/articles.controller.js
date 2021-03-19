const httpStatus = require('http-status-codes');
const articleService = require('../services/articles.service');

const createArticle = async (req, res) => {
    const article = await articleService.createArticle(req.body);
    res.status(httpStatus.CREATED).send();
};

const getArticle = async (req, res) => {
    const data = await articleService.getArticle(req.body);
    res.status(httpStatus.OK).send(data);
};

module.exports = {
    createArticle,
    getArticle
};