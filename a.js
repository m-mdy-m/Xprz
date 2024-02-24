const Xprz = require('./index')
const { App,Package,Route,SharedApp} = new Xprz()

const { launch} = new App()
launch()
const route = new Route()
const {getApp } = new SharedApp()
const app = getApp()
route.setRoute('/').get(()=>{
    const { send } = route.res()
    send('hi')
}).attachTo(app)
const { session,connectMongoDbSession} = new Package()

const store = connectMongoDbSession({
	uri: "mongodb://localhost:27017/test",
	collection: "sessions",
})
session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
})