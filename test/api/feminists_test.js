require('../spec_helper');
const Feminist = require('../../models/feminist');
const User = require('../../models/user');

let TOKEN;
describe("Feminist tests", () => {
  beforeEach(done => {
    Feminist.collection.drop();
  });
describe ("GET /api/feminists", () => {
  beforeEach(done => {
    Feminist.collection.drop();
    done();
  });

  describe("GET /api/feminists", () => {
    beforeEach(done => {
      const Feminist = new Feminist({
        name: "Emeline",
        date: "1902",
        location: "London"
      });
      suffragette.save((err, feminist) => {
      done();
    });
    });
    it("should return a 200 response", done => {
  });

  //need to finish putting in my schema! ready for testing tomorrow.

  it ("should return a 200 response", done => {
    api
    .get('/api/feminists')
    .set('Accept', 'application/json')
    .expect(200, done);
  });
  it ("should return a JSON object", function (done) {
    api
    .get('/api/feminists')
    .set('Accept', 'application/json')
    .end((err , res) => {
      expect(res.body).to.be.an("object");
      done();
    });
  });
  it ("should return an array of feminists", function (done){
    api
    .get('/api/feminists')
    .set('Accept', 'application/json')
    .end((err, res) => {
      expect(res.body).to.be.an("array");
      done();

    });

  });
});
});
