"use strict";// Helps to handle http errors
const createError=require("http-errors"),express=require("express"),path=require("path"),cookieParser=require("cookie-parser"),logger=require("morgan"),indexRouter=require("./routes"),usersRouter=require("./routes/users"),apiRouter=require("./routes/api"),app=express();// Import the Express Library
// view engine setup
// We are delcaring the localization of the views
// Setting up the template engine
// Registering middlewares
// Log all received requests
// Parse request data into json
// Decode url info
// Parse client cookies into json
// Set up the static file server
// Registering routes
// catch 404 and forward to error handler
// error handler
app.set("views",path.join(__dirname,"views")),app.set("view engine","hbs"),app.use(logger("dev")),app.use(express.json()),app.use(express.urlencoded({extended:!1})),app.use(cookieParser()),app.use(express.static(path.join(__dirname,"public"))),app.use("/",indexRouter),app.use("/users",usersRouter),app.use("/api",apiRouter),app.use(function(req,res,next){next(createError(404))}),app.use(function(err,req,res){// set locals, only providing error in development
// render the error page
res.locals.message=err.message,res.locals.error="development"===req.app.get("env")?err:{},res.status(err.status||500),res.render("error")}),module.exports=app;