var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills.controller'); 

/* GET users listing. */
router.get('/', skillsController);

module.exports = router;
