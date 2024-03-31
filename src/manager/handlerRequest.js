const { RouteRegistrationError } = require("../Errors/RouteManager.error");

class ctxHandler {
  constructor(req, res, nxt) {
    this.req = req;
    this.res = res;
  }
  /**@private */
  proxyRequest({ targe, handler }) {
    return new Proxy(targe, {});
  }

  static ctxRoute(handlers) {
    return (req, res, nxt) => {
      try {
        const request = { ...new Request(req), ...req };
        const response = { ...new Response(res), ...res };
        const cx = new Proxy(
          { request, response },
          {
            get(target, prop) {
              const cxValue = target.response[prop] ?? target.request[prop];
              return cxValue !== undefined ? cxValue : null;
            },
          }
        );
        for (const handler of handlers) {
          if (nxt) {
            handler(cx, nxt);
          }
          handler(cx);
        }
      } catch (error) {
        // Handle errors that occur within the request handler
        throw new RouteRegistrationError(
          `Error in request handler: ${error.message}`
        );
      }
    };
  }
  middlewareCtx(handlers) {
    return (req, res, nxt) => {
      try {
        const request = { ...new Request(req), ...req };
        const response = { ...new Response(res), ...res };
        const cx = new Proxy(
          { request, response },
          {
            get(target, prop) {
              const cxValue = target.response[prop] ?? target.request[prop];
              return cxValue !== undefined ? cxValue : null;
            },
          }
        );
        for (const handler of handlers) {
          if (nxt) {
            handler(cx, nxt);
          }
          handler(cx);
        }
      } catch (error) {
        // Handle errors that occur within the request handler
        throw new RouteRegistrationError(
          `Error in request handler: ${error.message}`
        );
      }
    };
  }
}

function ctxUsingApp(...handlers) {
  return (error, req, res, nxt) => {
    const ctx = new Proxy(
      { error, req, res },
      {
        get(target, prop) {
          const cxValue =
            target.error[prop] || target.req[prop] || target.res[prop];
          return cxValue !== undefined ? cxValue : null;
        },
      }
    );
    for (const handler of handlers) {
      handler(ctx, nxt);
      return ctx;
    }
  };
}
