import config from 'config'
import LogError from 'lib/classes/error'

const WebApp = {}
WebApp.LogError = LogError
WebApp.config = config

global.WebApp = WebApp
global.LogError = LogError

export default () => {}
