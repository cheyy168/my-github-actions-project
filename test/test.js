
const request = require('supertest');
const app = require('../app');
const assert = require('chai').assert;

describe('GET /', function() {
  it('responds with Hello, GitHub Actions!', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        assert.equal(res.text, 'Hello, GitHub Actions!');
        done();
      });
  });
});
