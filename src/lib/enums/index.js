/* eslint-disable import/prefer-default-export */

export PATH from 'lib/enums/path'
export REQUEST from 'lib/enums/request'
export SOCKET from 'lib/enums/socket'

export const REGEXP = {
  NEXT_PATH: /^(\/_next\/([\S]+)$)/,
}

export const PAGES = {
  FEED: '/Feed',
  LOGIN: '/Login',
  REGISTER: '/Register',
  WELCOME: '/Welcome',
}

export const ROUTER_METHODS = {
  GET: 'get',
  POST: 'post',
}
