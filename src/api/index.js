import { Router } from 'express'
import account from 'api/account'

const examples = Router()

examples.get('/example', async (request, response) => {
  response.status(201).json({ status: 'OK' })
})

const routers = [examples, account]

export default routers
