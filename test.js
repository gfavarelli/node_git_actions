const request = require('supertest');
const express = require('express');
const chai = require('chai');
const expect = chai.expect;

const app = express();

app.get("/git", function (req, res) {
    res.send({ sucesso: "Teste GitHub Actions" });
});

// Teste para o endpoint "/git"
describe('GET /git', function() {
    it('deve retornar um objeto com a mensagem de sucesso', function(done) {
        request(app)
            .get('/git')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                expect(res.body).to.have.property('sucesso', 'Teste GitHub Actions');
                done();
            });
    });

    it('deve retornar um objeto com a mensagem de erro', function(done) {
        request(app)
            .get('/git')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                expect(res.body).to.have.property('sucesso', 'Teste GitHub Actions');
                done();
            });
    });
});
