import _get from 'lodash/get'

const errors = {
  account: {
    register: {
      failed: () => ({
        name: 'RegisterError',
        message: 'User register failed',
      }),
    },
    login: {
      notFound: () => ({
        name: 'LoginError',
        message: 'User not found',
      }),
      invalid: () => ({
        name: 'LoginError',
        message: 'Password not valid',
      }),
    },
  },
  request: {
    notFoundHandler: () => ({
      name: 'RequestError',
      message: 'Not found handler for request',
    }),
  },
  follow: {
    add: {
      existed: () => ({
        name: 'FollowError',
        message: 'Follow is existed',
      }),
      insertFailed: () => ({
        name: 'FollowError',
        message: 'Follow is insert failed',
      }),
    },
    remove: {
      notExisted: () => ({
        name: 'FollowError',
        message: 'Follow is not existed',
      }),
      removeFailed: () => ({
        name: 'FollowError',
        message: 'Follow is remove failed',
      }),
    },
  },
}

class Logger extends Error {
  constructor(path: string, ...rest) {
    super(...rest)
    const getError: void = _get(errors, path)
    if (!getError) {
      return new Error(path, ...rest)
    }

    const { name, message } = getError(...rest)
    const error = new Error()
    error.name = name
    error.message = message
    return error
  }
}

export default Logger
