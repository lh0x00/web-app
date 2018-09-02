import { Router } from 'express'
import { User } from 'db'

const router = Router()

router.get('/example', async (request, response) => {
  const x = await User.find({})
  response.status(201).json({ status: 'OK' })
})

export default router
