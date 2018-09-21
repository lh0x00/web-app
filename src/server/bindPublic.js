import express from 'express'
import path from 'path'

type TBindPublic = {
  server: any,
}

function bindPublic({ server }: TBindPublic): any {
  server.use(express.static(path.join(__dirname, 'public')))

  return server
}

export default bindPublic
