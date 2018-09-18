import axios from 'axios'
import _get from 'lodash/get'
import _isFunction from 'lodash/isFunction'
import Error from 'lib/classes/error'
import REQUEST from 'lib/enums/request'

class Request {
  constructor(name, ...rest) {
    const handle = _get(this, name)
    if (!_isFunction(handle)) {
      throw new Error('request.notFoundHandler')
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
    const result = request
      .then(({ data }) => data)
      .catch((error) => {
        console.error(error) // eslint-disable-line no-console
        return error
      })
    return result
  }

  login = ({
    username,
    password,
  }: LoginFields) => {
    const url = REQUEST.API.LOGIN
    const sender = this.send(url, { username, password })

    const request = sender
      .then(data => data)
      .catch((error) => {
        console.error(error) // eslint-disable-line no-console
        return error
      })

    this.request = request
    return request
  }
}

export default Request
