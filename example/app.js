/**
 * Example setup for using the Xprz framework.
 */
const Xprz = require('../xprz')

// Destructure required functions from Xprz App module
const { use, launch, loadRoutes, bodyParsing, static,initApp,listen, closeServer,setViewEngine} = Xprz.App();

// Launch the server
launch();
// Alternatively, you can initialize the app and start listening
// initApp();
// listen();


// Set the view engine to 'ejs'
// setViewEngine('ejs');
// Enable JSON body parsing
bodyParsing();
// Serve static files from the 'public' directory
static('public');
// Example usage of middleware 'cors' using $install
const cors = $install('cors');
use(cors());
use((ctx,nxt)=>{
    if (ctx.code === 'EBADCSRFTOKEN') {
      // CSRF token validation failed
      ctx.status(403).json({ error: 'CSRF token validation failed. Please refresh the page and try again.'  });
    } else {
      // Other errors
      nxt(ctx);
    }
  })
// Load routes from the 'routes' directory automatically
loadRoutes('routes');

// Gracefully close the server
closeServer(() => {
    console.log('Server closed');
});