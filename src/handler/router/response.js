class Response {
  constructor(res) {
    this.res = res;
    this.send = this.send.bind(this);
  }
  send(data) {
    this.res.send(data);
  }
}
module.exports = Response;
