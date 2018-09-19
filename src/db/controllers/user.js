import ErrorLogger from 'lib/classes/error'
import User from 'db/user'

class UserController {
  static async register(data: RegisterFields) {
    const { username, email, password } = data

    const user = await User.create({ username, email, password })
    if (!user) {
      throw new ErrorLogger('account.register.failed')
    }

    return user
  }

  static logged(request: any, user: object) {
    const userParsed = { ...user }

    if (userParsed.password) {
      delete userParsed.password
    }

    request.session.user = user
    request.session.isLogged = new Date()
  }

  static async login(data: LoginFields) {
    const { username, password } = data

    const user = await User.findOne(
      {
        $or: [{ email: username }, { username }],
      },
      {
        email: 1,
        username: 1,
        password: 1,
      },
    )
    if (!user) {
      throw new ErrorLogger('account.login.notFound')
    }

    const isValid = user.authenticate(password)
    if (!isValid) {
      throw new ErrorLogger('account.login.invalid')
    }

    if (user.password) {
      delete user.password
    }

    return user
  }
}

export default UserController
