import isProd from 'lib/utils/isProduction'
import prodConfig from 'config/production'
import devConfig from 'config/development'

const config = isProd ? prodConfig : devConfig

export default config
