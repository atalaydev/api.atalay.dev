const express = require('express');
const articleController = require('../../controllers/articles.controller');

const router = express.Router();

router.route('/')
    .get(articleController.getArticle)
    .post(articleController.createArticle);

module.exports = router;