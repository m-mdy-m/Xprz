class Response {
  constructor(res) {
    this.res = res
    this.send = this.send.bind(this)
  }
  send(){
    this.res.send('hi')
  }
}
module.exports = Response;
