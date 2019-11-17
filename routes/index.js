const urlCtrl = require('../controllers/url');

module.exports = router => {
	router.get('/', async (ctx) => ctx.render('index'));
	router.get('/:code', urlCtrl.redirect);
	router.use('/api/url', require('./url'));
};