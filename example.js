const { App, Route } = require("./xprz");
const { launch } = App();
const app = launch();
const { route } = Route();
route("/")
  .get((ctx) => {
    ctx.send("hi");
  })
  .attachTo(app);

  route('/api').get((ctx)=>{
    ctx.send('/api get')
  })
