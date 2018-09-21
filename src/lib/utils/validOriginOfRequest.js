import { parse } from 'url'
import config from 'config'

function validOriginOfRequest(origin: string): boolean {
  const { server } = config
  const { hostname, port } = parse(origin)
  return hostname === server.hostname && Number(port) === Number(server.port)
}

export default validOriginOfRequest
