const	URL = require('../models/url'),
		codeLength = 6;

async function redirect(ctx){
	const url = await URL.findOne({shortenCode: ctx.params.code});
	if (url) {
		ctx.status = 301;
		ctx.redirect(`${url.orignalURL.startsWith("http") ? "" : "https://"}` + url.orignalURL);
	} else {
		ctx.status = 301;
		ctx.redirect(`/#/404/${ctx.params.code}`);
	}
}

async function getShortenURL(ctx){
	const url = await URL.findOne({orignalURL: ctx.request.body.url});
	if (url) {
		// if url has been already shortened
		ctx.status = 200;
		ctx.body = url;
	} else {
		ctx.body = await URL.create(ctx.request.body.url);
	}
}

module.exports = {
	redirect,
	getShortenURL,
}