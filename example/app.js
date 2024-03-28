/**
 * Example setup for using the Xprz framework.
 */
const Xprz = require('xprz')

// Destructure required functions from Xprz App module
const { use, launch, loadRoutes, useJsonBody, static,initApp,listen, closeServer,setViewEngine} = Xprz.App();

// Launch the server
launch();
// Alternatively, you can initialize the app and start listening
// initApp();
// listen();


// Set the view engine to 'ejs'
setViewEngine('ejs');
// Enable JSON body parsing
useJsonBody();
// Serve static files from the 'public' directory
static('public');
// Example usage of middleware 'cors' using $install
const cors = $install('cors');
use(cors());
// Load routes from the 'routes' directory automatically
loadRoutes('routes');

// Gracefully close the server
closeServer(() => {
    console.log('Server closed');
});