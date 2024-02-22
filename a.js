const XPress  = require('./index')

const { App,Database,HttpMethod,Package,Route,SharedApp } = new XPress()

const {closeServer,getExpress,initApp,launch,listen,loadRoutes,middleware,set,setErrorHandler,setTemplateEngine,shutdown,static,use,useJsonBody } = new App()
const { MongoDB,MySql}= new Database()
const {close,connectMongoDB,delDoc,find,getClient,getDb,getMongoDb,insert,up, } = MongoDB()
const {Create,connect,deleteQuery,endConnection,execute,getConnection,getMySql,query,read,transaction,update } = MySql()
const { DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT,TRACE,addPrefix,setBaseRoute} = new HttpMethod()
const {bcryptjs,bodyParser,connectMongoDbSession,cors,csrf,flash,jwt,multer,nodemailer,session } = new Package()
const { compare,getBcryptjs,hash} = bcryptjs()
const { bufferData,csv,encoded,getBodyParser,json,limiting,rawTextData,xml} = bodyParser()
const store = connectMongoDbSession()
const { getCors} = cors()
const { configure,getCsrf} = csrf()
const { getFlash} = flash()
const { getJwt,isTokenExpired,jwtAuthenticate,jwtSign,jwtVerify} = jwt()
const { any,array,disk,fields,filter,getMulter,single} = multer()
const { createTransport,getNodeMailer,send,setMailOptions} = nodemailer()
const s = session({ secret: 'secret', resave: false, saveUninitialized: true })

// const {attachTo,del,get,group,options,patch,post,prefix,put,req,res,setError,setRoute,setValidator,using} = new Route() /// methods
const r = new Route() /// methods
r.setRoute('/').get(()=>{
    const {append,attachment,clearCookie,contentType,cookie,download,end,format,get,getCookieHandler,getHeader,getHeadersHandler,getJsonHandler,header,json,jsonp,links,location,redirect,render,res,send,sendFile,sendHTML,sendStatus,set,setContentType,setHeader,setHeaders,status,type,vary,write } = r.res()
    const { accepts, getAcceptedContentTypes,getAllParams,getBody,getBodyParam,getCharsets,getCookieName,getCookies,getEncodings,getHeaderName,getHeadersReq,getHeaderIgnoreCase,getHost,getHostname,getIp,getLanguages,getMethod,getPath,getProtocol,getQuery,getQueryParam,getSubdomains,getUrl,hasBodyParam,hasCookie,hasHeader,hasHeaderIgnoreCase,hasQueryParam ,is,isAjax,isFresh,isMethod,isSecure,isStale,isXhr,param,req} = r.req()
    const { clearAllCookies,countCookies,getAllCookies,getCookie,isCookie,removeCookie,setCookie} = getCookieHandler()
    const { cacheControl,clearAllHeaders,clearHeader,setContentSecurityPolicy,setContentTypeOptions,setCorsHeaders,setCorsMaxAge,setCrossOriginEmbedderPolicy,setCrossOriginOpenerPolicy,setCrossOriginResourcePolicy,setExpectCTHeader,setExpires,setFeaturePolicy,setFrameOptions,setHSTSHeader,setLocation,setNoSniffHeader,setPragma,setPublicKeyPinsHeader,setReferrerPolicy,setRetryAfter,setStrictTransportSecurity,setTrailer,setTransferEncoding,setUpgrade,setVaryHeader,setWWWAuthenticate,setWarning,setXForwardedFor,setXForwardedProto,setXRealIP,setXssProtection,} = getHeadersHandler()
    const { advancedJson,authRequired,authzRequired,badRequest,created,deleted,downloadLink,error,fileUploadSuccess,internalServerError,list,notFound,opSuccess,redirectResponse,serviceUnavailable,success,updated,validationFailed} = getJsonHandler()

})

const {getApp,getExp,useApp} = new SharedApp()