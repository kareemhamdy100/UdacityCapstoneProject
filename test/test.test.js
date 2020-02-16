const supertest = require('supertest');

// const Thread = require('../models/thread');
const app = require('../app');

const api = supertest(app);


test('test get ', async () => {
    jest.setTimeout(100);
     await api.get('/').expect(201)

});


afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 50)); // avoid jest open handle error
  });