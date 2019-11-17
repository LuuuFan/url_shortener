const	request = require('supertest'),
		URL = require('../models/url');

describe('model tests', () => {
	test('create url', async () => {
		const domainArr = [undefined, null, "", "1.com", "2.com", "3.com"];
		domainArr.forEach(async (domain) => {
			const response = await URL.create(domain);
			if(!domain) expect(response.errors).toBeDefined();
			else expect(response.shortenCode).toBeDefined();
		});
	})
})