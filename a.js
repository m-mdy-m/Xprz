const XPress = require('./index')

const {App,Database,Package,Route,HttpMethod } = new XPress()
const { getExpress,initApp,launch,listen,middleware,set,setErrorHandler,setTemplateEngine,shutdown,static,use,useJsonBody}= new App()
const { MongoDb,MySql}= new Database()
const {bcryptjs,bodyParser,connectMongoDbSession,cors,csrf,flash,jwt,multer,nodemailer,session }= new Package()
const {attachTo,del,get,group,options,patch,post,prefix,put,setError,setRoute,setValidator, using}= new Route()
const {DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT,TRACE,addPrefix,setBaseRoute}= new HttpMethod()

