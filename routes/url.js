const	Router = require('koa-router'),
		router = new Router(),
		Ctrl = require('../controllers/url');

router.post('/', Ctrl.getShortenURL)

module.exports = router.routes();
