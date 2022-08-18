const { app } = require('../../app')
const supertest = require('supertest')

const api = supertest(app)

const baseURL = '/api/v1'

describe('si el usuario no esta logueado', () => {
  test('se obtienen los hoteles correctamente', async () => {
    const response = await api.get(baseURL + '/hoteles')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    const body = response.body
    //TODO JSON schema test
  }, 10000)
  test('no se puede agregar un hotel', async () => {
    await api.post(baseURL + '/hoteles')
      .expect(404)
      .expect('Content-Type', /application\/json/)
  }, 10000)
  test('no se puede actualizar un hotel', async () => {
    await api.put(baseURL + '/hoteles/1')
      .expect(404)
      .expect('Content-Type', /application\/json/)
  }, 10000)
  test('no se puede eliminar un hotel', async () => {
    await api.delete(baseURL + '/hoteles/1')
      .expect(404)
      .expect('Content-Type', /application\/json/)
  }, 10000)
})
