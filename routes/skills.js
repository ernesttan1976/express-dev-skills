var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills.controller');


/* GET users listing. */
router.post('/edit/:id', skillsController.editSkill)
router.put('/edit/:id', skillsController.editSkill2);
router.delete('/:id', skillsController.deleteSkill);
router.post('/', skillsController.newSkill2);
router.get('/new', skillsController.newSkill);
router.get('/:id', skillsController.show);
router.get('/', skillsController.index);

module.exports = router;
 