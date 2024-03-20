const Xprz = require("./xprz");
const { launch, useJsonBody } = Xprz.App();
const { route } = Xprz.Route();
const app = launch();
useJsonBody();
route("/")
  .get((req, { send }) => {
    send("hi");
  })
  .post((req, res) => {
    console.log("req.body =>", req.body);
    // Define validation rules
    const Rules = {
      username: "string",
      password: "string|min:6",
    };
    // Additional options for validation
    const option = {
      customMessages: {
        password: "must be at least 6 characters long.",
      },
    };
    const errors = req.verifyBody(Rules, option);
    console.log("error =>", errors);
    if (Object.keys(errors).length === 0) {
      console.log("Request body is valid.");
    } else {
      console.error("Validation errors:", errors);
    }
  })
  .attachTo(app);
