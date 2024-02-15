const start = require('../../shared/app')
const app = start()

function get(url,handler) {
  app.get(url,handler)
}
get('/',(req,res,nxt)=>{
  res.send('hi')
})