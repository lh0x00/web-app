import renderPage from 'server/renderPage'
import { PAGES, ROUTER_METHODS } from 'lib/enums'

export default {
  methods: [ROUTER_METHODS.POST, ROUTER_METHODS.GET],
  handler: ({
    app, request, response, next,
  }) => {
    const { session } = request
    const { isLogged } = session || {}
    if (!isLogged) {
      return renderPage({
        app,
        page: PAGES.WELCOME,
        request,
        response,
        query: {},
        next,
      })
    }
    return renderPage({
      app,
      page: PAGES.FEED,
      request,
      response,
      query: {},
      next,
    })
  },

}
