const router = require('express').Router();
const handler = require('./routes/requestHandler.js');

router.route('/sections').get(handler.getSections);

router.route('/category').get(handler.getCategories);
router.route('/category/:categoryName').get(handler.getPostsWithCategory);

module.exports = router;
