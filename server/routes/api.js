// Importing Express library
const express = require('express');
// Creating a Router Instace
const router = express.Router();

// Creating the route
router.get('/author', (req, res)=>{
  // Responding to the client using res object
  res.json({
    "name": "JUlio Cesar",
    "lastname": "Valderrabano Montiel",
    "twitter": "@julio",
    "job": "ITGAM 🏫"
  });
}); // function(req, res){}

// Exporting the router
module.exports = router;