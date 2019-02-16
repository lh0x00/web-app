import axios from 'axios'
import _get from 'lodash/get'
import REQUEST from 'lib/enums/request'

class Request {
  request: any

  constructor(name, ...rest) {
    const handle = _get(this, name)
    if (!handle) {
      throw new LogError('request.notFoundHandler')
    }

    handle(...rest)
    return this
  }

  send = (
    url: string,
    data: any,
    options?: object = {},
  ): Promise<void> => axios({
    baseURL: REQUEST.BASE_URL,
    method: REQUEST.METHOD,
    validateStatus: () => true,
    url,
    data,
    ...options,
  })

  fetch = () => {
    const { request } = this
    const result = request.then(({ data }) => data).catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error)
      return error
    })
    return result
  }

  login = ({ username, password }: LoginFields) => {
    const url = REQUEST.API.LOGIN
    const sender = this.send(url, { username, password })

    const request = sender.then(data => data).catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error)
      return error
    })

    this.request = request
    return request
  }

  register = ({ username, email, password }: RegisterFields) => {
    const url = REQUEST.API.REGISTER
    const sender = this.send(url, { username, email, password })

    const request = sender.then(data => data).catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error)
      return error
    })

    this.request = request
    return request
  }
}

export default Request
