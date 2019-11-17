const mongoose = require('mongoose'), {generateShortenCode} = require('../utils/tools');

const URLSchema = new mongoose.Schema({
	orignalURL: {
		type: String,
		index: true,
	},
	shortenCode: {
		type: String,
		index: true,
	},
}, {
	timestamps: true
});

URLSchema.statics.create = async function create(orignalURL){
	if (!orignalURL) return {errors: "invalid orignalURL"};
	let code = generateShortenCode(6);
	let existCode = await URL.findOne({shortenCode: code});
	
	// make sure the code is unique;
	while (existCode) {
		code = generateShortenCode(6);
		existCode = await URL.findOne({shortenCode: code});
	}

	const newURL = new URL({orignalURL: orignalURL, shortenCode: code});

	// save new shorted url to database
	try {
		const savedURL = await newURL.save();
		return savedURL;
	} catch(e) {
		console.log("failed to save url", e);
		return {errors: e._message};
	}
};

const URL = mongoose.model('URL', URLSchema);
module.exports = URL;