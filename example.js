const Xprz = require('./xprz')
const {launch } = Xprz.App()
const { route }  = Xprz.Route()
launch()

route('/').get((req,res)=>{
    console.log('req=>',req);
})