const Koa = require('koa'),
	  logger = require('koa-logger'),
	  router = require('koa-router')(),
	  koaBody = require('koa-body'),
	  serve = require('koa-static'),
	  keys = require('./config/keys'),
	  mongoose = require('mongoose'),
	  app = new Koa(),
	  views = require('koa-views');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

// logger
app.use(logger());

// koa body;
app.use(koaBody());

app.use(views(__dirname + '/dist', {
  map: {
    html: 'index'
  }
}));

// serve files in vue public folder (css, js etc)
app.use(serve(__dirname + '/dist'));

// router
require('./routes')(router)
app.use(router.routes());
app.use(router.allowedMethods());


// listen on port
const PORT = process.env.PORT || 9000;
const server = app.listen(PORT);

// for test;
module.exports = server;
