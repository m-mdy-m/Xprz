const App = require('./src/shared/app');
const using = require('./src/Using');
using.setAppInstance(App.initApp());
App.listen(3000);