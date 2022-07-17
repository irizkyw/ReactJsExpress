const express = require('express'); //import express
const userController = require('../controller/UserController'); 

const router  = express.Router(); 

router.get('/api', userController.getAll);
router.get('/api/:id',userController.getID);


module.exports = router; // export to use in server.js