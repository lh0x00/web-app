/* eslint-disable import/prefer-default-export */

import connectDatabase from 'server/connectDatabase'
import applyMiddleware from 'server/applyMiddleware'
import handleSecure from 'server/handleSecure'
import initSession from 'server/initSession'
import bindPublic from 'server/bindPublic'
import registerApi from 'server/registerApi'
import bindRoutes from 'server/bindRoutes'

export {
  connectDatabase,
  applyMiddleware,
  handleSecure,
  initSession,
  bindPublic,
  registerApi,
  bindRoutes,
}
