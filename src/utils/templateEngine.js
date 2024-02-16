function setEjs(app,dir){
    app.set( 'view engine', 'ejs' );
    app.set('views', dir)
}
function setHBS(app,hbs){
    app.engine('hbs',hbs.engine({
        defaultLayout: "main-layout", 
        extname: 'hbs' 
    }))
}