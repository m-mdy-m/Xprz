class Response {
  constructor(res) {
    this.res = res
    this.res.send('hi')
  }
  
}
module.exports = Response;
