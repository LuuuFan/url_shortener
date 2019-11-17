const	request = require('supertest'), 
		Tool = require('../utils/tools');

describe('util tests', () => {
	test('generate short code', async () => {
		const lengthArr = [undefined, null, "", 0, 1, 2, 3, 4, 5, 6];
		lengthArr.forEach(async (l) => {
			const code = Tool.generateShortenCode(l);
			expect(code.length).toEqual(l || 0);
		});
	})
})