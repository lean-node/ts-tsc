import request from 'supertest';

describe('Simple TypeScript Hello World Server', () => {
  const app = request('http://localhost:3000');

  it('can handle tests written in TypeScript', () => {
    const expected = true;
    expect(true).toBe(expected);
  });

  it('serves successfully the html homepage', (done) => {
    app.get('/').expect('Content-Type', 'text/html').expect(200, done);
  });
});
