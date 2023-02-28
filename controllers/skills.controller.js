const {skills} = require('../models/skills.model');

function skillsController(req, res) {
    //console.log(skills);
    const title = "Web Developer Skills and Concepts";
    res.render('skills',{title,skills});
  }

  module.exports = skillsController;