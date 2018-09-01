import isProd from 'utils/isProduction'
import prodConfig from 'config/production.json'
import devConfig from 'config/development.json'

const config = isProd ? prodConfig : devConfig

export default config
