const {getAll, getOne, addSkill, getCount, deleteSkillData, editSkillData} = require('../models/skills.model');

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

function editSkill(req,res){
  console.log("Form for Edit:", req.params.id);
  const title = "Edit Skill";
  const context={title, skills: [getOne(Number(req.params.id))], id: req.params.id};
  console.log(context);
  res.render('skills/edit',context);
}

function editSkill2(req,res){
  console.log("PUT:", req.params.id);
  const {skill, description} = req.body;
  editSkillData(Number(req.params.id), {skill, description});
  res.redirect('/skills/'+req.params.id);
}

module.exports = {index, show, newSkill, newSkill2, deleteSkill, editSkill, editSkill2};