var request = require('request');

var base_url = 'http://localhost:3000/';

describe('Hello World Server', function() {
  describe('GET /', function() {
    it('returns status code 200', function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it('return Hello World', function(done) {
      request.get(base_url, function(error, response, body) {
        var helloWorld = '["Hello World"]';
        expect(body).toBe(helloWorld);
        done();
      });
    });

    it('returns Hello World array', function(done) {
      request.get('http://localhost:3000?number=3', function(error, response, body) {
        expect(body).toBe(JSON.stringify(['Hello World', 'Hello World', 'Hello World']));
        done();
      });
    });
  });
});
