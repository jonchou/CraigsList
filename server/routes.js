const router = require('express').Router();
const handler = require('./routes/requestHandler.js');

router.route('/:category').get(handler.getCategories);

module.exports = router;
