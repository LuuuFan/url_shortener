const	request = require('supertest'),
		server = require('../index.js');

beforeAll(async () => {
	console.log('Jest starting!');
});

// close the server after each test
afterAll(() => {
	server.close();
	console.log('server closed!');
});

describe('basic route tests', () => {
	test('get home route GET /', async () => {
		const response = await request(server).get('/');
		expect(response.status).toEqual(200);
	});

	test('get shortCode route GET /:code', async () => {
		const response = await request(server).get('/abcd');
		expect(response.status).toEqual(301);
	});

	test('get shortCode route GET /api/url', async () => {
		const data = {url: "google.com"};
		const response = await request(server).post('/api/url').send(data);
		expect(response.status).toEqual(200);
		expect(response.type).toEqual("application/json");
	})
});

