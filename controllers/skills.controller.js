const {getAll, getOne, addSkill, getCount, deleteSkillData} = require('../models/skills.model');

function index(req, res) {
    //console.log(skills);
    const title = "Web Developer Skills and Concepts";
    const context={title, skills:getAll()};
    res.render('skills/index',context);
  }

function show(req,res){
  const title = "Web Developer Skills and Concepts";
  //console.log(req.params.id);
  const context={title, skills: [getOne(Number(req.params.id))]};
  //console.log(context);
  res.render('skills/show',context);

}

function newSkill(req,res){
  
  const title = "New Skill";
  //console.log(req.params.id);
  const context={title};
  //console.log(context);
  res.render('skills/new',context);

}

function newSkill2(req,res){
  const title = "New Skill Added";
  const {skill, description} = req.body;
  addSkill({skill: skill, description: description});
  const context={title, skills: [getOne(getCount()-1)]};
  res.render('skills/show',context);
}

function deleteSkill(req,res){
  //const title = "Web Developer Skills and Concepts";
  deleteSkillData(Number(req.params.id));
  //const context={title, skills:getAll()};
  res.redirect('/skills');
}

module.exports = {index, show, newSkill, newSkill2, deleteSkill};