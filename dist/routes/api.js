"use strict";// Importing Express library
const express=require("express"),router=express.Router();// Creating a Router Instace
// Creating the route
// function(req, res){}
// Exporting the router
router.get("/author",(req,res)=>{// Responding to the client using res object
res.json({name:"JUlio Cesar",lastname:"Valderrabano Montiel",twitter:"@julio",job:"ITGAM \uD83C\uDFEB"})}),module.exports=router;