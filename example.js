const Xprz = require('./xprz')
const {launch } = Xprz.App()
const { route }  = Xprz.Route()
const app = launch()

route('/hi').get((req,{send})=>{
    send('hi')
    console.log('req=>',req);
}).attachTo(app)