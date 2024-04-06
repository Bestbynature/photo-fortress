import app from '../src/app.ts';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe('GET /api/get_images', () => {
    it('should return a list of ids', (done) => {
        chai.request(app)
            .get('/api/get_images')
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
                // chai.expect(res.body).to.be.an('array');
                // Add more assertions as needed
                done();
            });
    });
});
