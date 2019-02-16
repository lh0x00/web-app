import { parse } from 'url'

function validOriginOfRequest(origin: string): boolean {
  const { server } = WebApp.config
  const { hostname, port } = parse(origin)
  return hostname === server.hostname && Number(port) === Number(server.port)
}

export default validOriginOfRequest
