const app = require('../../shared/app')
const { send } = require("../../funcs/send");
let response;
function get(route) {
  app.get(route, (res, req, nxt) => {
  });
  console.log("res =>", response);
}

console.log('hi');
app.get('/ss',(req,res)=>{
    console.log('rs=>',res);
})
