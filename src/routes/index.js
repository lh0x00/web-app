import renderPage from 'server/renderPage'
import { PAGES, ROUTER_METHODS } from 'lib/enums'
import PATH from 'lib/enums/path'

import home from 'routes/home'
import feed from 'routes/feed'
import welcome from 'routes/welcome'
import login from 'routes/login'
import register from 'routes/register'

export const METHOD_ALLOW = [
  ROUTER_METHODS.GET,
  ROUTER_METHODS.POST,
]
export const METHOD_DEFAULT = [ROUTER_METHODS.GET]

export default {
  [PATH.HOME]: home,
  [PATH.FEED]: feed,
  [PATH.WELCOME]: welcome,
  [PATH.LOGIN]: login,
  [PATH.REGISTER]: register,
}
