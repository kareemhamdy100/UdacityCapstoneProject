const supertest = require('supertest');

// const Thread = require('../models/thread');
const app = require('../app');

const api = supertest(app);


test('test get ', async () => {
    jest.setTimeout(300);
     await api.get('/').expect(200)

});


afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 100)); // avoid jest open handle error
  });