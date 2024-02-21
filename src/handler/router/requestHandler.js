const Request = require('./request')
const Response = require('./response')
function RequestHandler(request,response){
    this.res = new Response(response)
    this.req = new Request(request)
}
module.exports = RequestHandler