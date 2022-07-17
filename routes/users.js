const express = require('express');
const UserController = require('../controller/UserController');

const router  = express.Router(); 

router.get('/api', UserController.getAll);
router.get('/api/search/:id',UserController.getID);
router.get('/api/delete/:id',UserController.getDelete);
router.get('/api/update/:id',UserController.putEdit);


module.exports = router;