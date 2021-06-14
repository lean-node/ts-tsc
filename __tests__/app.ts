import request from 'supertest';
import { server } from '../src/app';

describe('Simple TypeScript Hello World Server', () => {
  const app = request(server);

  it('can handle tests written in TypeScript', () => {
    const expected = true;
    expect(true).toBe(expected);
  });

  it('serves successfully the html homepage', (done) => {
    app.get('/').expect('Content-Type', 'text/html').expect(200, done);
  });
});
