const {initApp,launch,listen} = require('./src/shared/app');
const using = require('./src/Using');
using.setAppInstance(initApp());
listen(3000);