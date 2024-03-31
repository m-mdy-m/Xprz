const xprz = require("./xprz");
const { use, launch, useJsonBody } = xprz.App();
const route = xprz.Route();
const app = launch();
useJsonBody();
route
  .route("/")
  .get((ctx) => {
    ctx.res.send("hi");
  })
  .post(({ body: { test } }) => {
    console.log("test:", test);
  })
  .attachTo(app);
