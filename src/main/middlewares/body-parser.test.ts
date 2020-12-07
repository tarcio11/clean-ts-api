import request from 'supertest'
import app from '../config/app'

describe('Body Parse Middleware', () => {
  test('should parse body as json', async () => {
    app.post('/test_body_parse', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parse')
      .send({ name: 'Tarcio' })
      .expect({ name: 'Tarcio' })
  })
})
