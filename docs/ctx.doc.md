# Context Object (ctx)

The `ctx` object encapsulates the context of a request within the application. It serves as a bridge between the incoming HTTP request and the outgoing HTTP response, offering a range of properties and methods to facilitate request handling and response generation.

## Properties

### req

- Type: `object`
- Description: The `req` property contains the request object associated with the context. This object encapsulates details about the incoming HTTP request, such as the request method, URL, headers, and request body.

### res

- Type: `object`
- Description: The `res` property holds the response object associated with the context. This object provides methods and properties for crafting and sending HTTP responses back to the client, including setting response headers, status codes, and sending response data.

### next()

- Description: The `next()` method is a function that passes control to the next middleware function in the stack. It is commonly used within middleware functions to delegate processing to subsequent middleware or route handlers. Calling `next()` indicates that the current middleware has completed its processing and that the next middleware in the chain should be executed.

## Example

```javascript
// Example of using ctx object in a route handler
route("/example").get((ctx) => {
  ctx.send("Hello, World!");
});
```

In this example, a route handler is defined for the `/example` endpoint. Within the handler function, the `ctx` object is used to access the request and response objects associated with the current request context. The `ctx.send()` method is then used to send a simple "Hello, World!" response back to the client. This demonstrates the basic usage of the `ctx` object in handling HTTP requests and responses.