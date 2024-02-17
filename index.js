const { launch } = require("./src/shared/AppManager");
launch();
const Route = require("./src/core/routes/router");
const { get, setRoute } = require("./src/core/CRUD/GET");
const { setEjs } = require("./src/utils/templateEngines");
const { use } = require("./src/utils/funcs");

setEjs("views");
const router = new Route();
// use(router)
// setRoute(router);
// get("/", { send: "hi" });
// get("/test", { send: "hi2" });
// get("/").res({

// })
// app.get('/',(req,res,nxt)=>{
//     res.send ////
//     req.body ////
// })

// The first method
get("/").res({
  send: "hi",
  /// or
  write: "hii",
});
let b;
get("/").req({
  body: (body) => {
    b = body;
  },
});

/// The second method
const res = get("/").res();
res.send("hi");
res.write("hi");
const req = get("/").req();
req.body();
/// The third method
get("/").handler(function (req, res) {
  const { send, write } = res;
  send("test");
  const { body, query, params } = req;
  const reqBody = body();
});