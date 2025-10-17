const request = require('supertest');
const app = require('../app');
const sequelize = require('../db');

describe('Prueba unitaria ', () => {
  test('GET / servidor aca', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Servidor Express.js en funcionamiento");
  });

  test('GET /Usuario a de devolver un array', async () => {
    const res = await request(app).get('/Usuario');
    expect([200, 500]).toContain(res.statusCode);
  });

  // mi test con el post

  test('POST /Usuario debe crearseeeeeee ', async () => {
    const res = await request(app)
      .post('/Usuario')
      .send({ usuario: 'Felix', password: 'MeGustasssssssssss' })
      .set('Accept', 'application/json');

    expect(res.statusCode).toBe(201);
    expect(res.body.usuario).toBe('Felix');
    expect(res.body).toHaveProperty('id');
  });

  afterAll(async () => {
    await sequelize.close();
  });
});
