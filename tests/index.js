const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()

chai.use(chaiHttp)

describe('site', () => {                  // Describe what you are testing
  it('Should display a homepage', (done) => { // Describe what should happen
    // In this case we test that the home page loads
    chai.request('localhost:3000')
      .get('/')
      .end((err, res) => {
        if (err) {
          done(err)
        }
        res.status.should.be.equal(200)
        done()                           // Call done if the test completed successfully.
      })
  })
})

// signup
it('should be able to signup', (done)=> {
  User.findOneAndRemove({ username: "testone" }, function() {
    agent
      .post('/signup')
      .send({ username: "testone", password: "password" })
      .end((err, res)=> {
        console.log(res.body)
        res.should.have.status(200);
        res.should.have.cookie("nToken");
        done();
      });
  });
})
