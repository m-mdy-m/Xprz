const Xprz = require("./xprz");
const { launch } = Xprz.App();
const app = launch();
const router = Xprz.Route();
const loggerMiddleware = (req, res, next) => {
    console.log('hi');
  console.log("Logging request:", req.method, req.url);
  next();
};
// Register global middleware
router.globalMiddleware([loggerMiddleware]);

// Define routes
router
  .route("/api")
  .get((req, res) => {
    res.send("GET /api");
  })
  .post((req, res) => {
    res.send("POST /api");
  });

router
  .route("/api/users")
  .get((req, res) => {
    res.send("GET /api/users");
  })
  .post((req, res) => {
    res.send("POST /api/users");
  });

router
  .group("/api/admin", (adminRouter) => {
    adminRouter
      .route("/users")
      .get((req, res) => {
        res.send("GET /api/admin/users");
      })
      .post((req, res) => {
        res.send("POST /api/admin/users");
      });
  })
  .endGroup();
router.attachTo(app);
