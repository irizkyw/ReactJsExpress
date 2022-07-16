const express = require('express'); //import express
const userController = require('../controller/UserController'); 

const router  = express.Router(); 

router.get('/', userController.getAll);
router.get('/:id',userController.getID);


module.exports = router; // export to use in server.js