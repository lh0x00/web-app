import { Router } from 'express'
import { User } from 'collections'

const router = Router()

router.get('/example', async (request, response) => {
  const x = await User.find({})
  console.log({ x })
  response.status(201).json({ status: 'OK' })
})

export default router
