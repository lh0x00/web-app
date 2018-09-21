type TRenderPage = {
  app: any,
  path: string,
  request: object,
  response: object,
  query: object,
  next: Function,
}

const renderPage = ({
  app, page, request, response, query,
}: TRenderPage): any => app.render(request, response, page, query)

export default renderPage
