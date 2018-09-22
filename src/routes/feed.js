import renderPage from 'server/renderPage'
import { PAGES, ROUTER_METHODS } from 'lib/enums'

export default {
  methods: [ROUTER_METHODS.POST, ROUTER_METHODS.GET],
  handler: ({
    app, request, response, next,
  }) => renderPage({
    app,
    page: PAGES.FEED,
    request,
    response,
    query: {},
    next,
  }),
}
