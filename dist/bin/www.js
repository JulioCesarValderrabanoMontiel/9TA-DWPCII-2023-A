#!/usr/bin/env node
/**
 * Module dependencies.
 */ // Importing the server logic
// require is used to import code from an external file 
"use strict";const app=require("../app"),debug=require("debug")("projnotes"),http=require("http"),port=normalizePort(process.env.PORT||"3000");// Importing an external dependecy
app.set("port",port);/**
 * Create HTTP server.
 */const server=http.createServer(app);// (req, res) => { acciones }
/**
 * Listen on provided port, on all network interfaces.
 */ // Specifying the port where the server will be listening
server.listen(port),server.on("error",onError),server.on("listening",onListening);/**
 * Normalize a port into a number, string, or false.
 */function normalizePort(val){const port=parseInt(val,10);return isNaN(port)?val:!!(0<=port)&&port}/**
 * Event listener for HTTP server "error" event.
 */function onError(error){if("listen"!==error.syscall)throw error;const bind="string"==typeof port?"Pipe "+port:"Port "+port;// handle specific listen errors with friendly messages
switch(error.code){case"EACCES":console.error(bind+" requires elevated privileges"),process.exit(1);break;case"EADDRINUSE":console.error(bind+" is already in use"),process.exit(1);break;default:throw error;}}/**
 * Event listener for HTTP server "listening" event.
 */function onListening(){const addr=server.address(),bind="string"==typeof addr?"pipe "+addr:"port "+addr.port;debug(`⭐⭐ Listening on ${process.env.APP_URL}:${addr.port} ⭐⭐`)}