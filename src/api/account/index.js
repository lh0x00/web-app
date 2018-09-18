import { Router } from 'express'
import UserController from 'db/controllers/user'

const router = Router()

router.post('/account/login', (request, response) => {
  const {
    username,
    password,
  } = request.body || {}

  UserController.login({
    username,
    password,
  }).then((user) => {
    UserController.logged(request, user)
    response.status(200).json({ status: true, data: user })
  }).catch((error) => {
    response.status(200).json({ status: false, error })
  })
})

router.post('/account/register', (request, response) => {
  const {
    username,
    email,
    password,
  } = request.body || {}

  UserController.register({
    username,
    email,
    password,
  }).then((user) => {
    UserController.logged(request, user)
    response.status(200).json({ status: true, data: user })
  }).catch((error) => {
    response.status(200).json({ status: false, error })
  })
})

export default router
