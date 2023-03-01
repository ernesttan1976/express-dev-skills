

let skills=[
{
    skill: "HTML",
    description: "The markup language used to create the structure of web pages."
},
{
    skill: "CSS",
    description: "The language used to style the appearance of web pages."
},
{
    skill: "JavaScript",
    description: "The programming language used to create interactive and dynamic web pages."
},
{
    skill: "Responsive design",
    description: "The approach of designing web pages to adapt to different screen sizes and devices."
},
{
    skill: "Web accessibility",
    description: "The practice of making web content and interfaces accessible to all users, regardless of their abilities or disabilities."
},
{
    skill: "SEO (Search Engine Optimization)",
    description: "The practice of optimizing web pages and content to improve their ranking and visibility in search engine results pages (SERPs)."
},
{
    skill: "Web hosting",
    description: "The process of storing and serving web pages and other web content on a web server."
},
{
    skill: "Web APIs",
    description: "The protocols and interfaces used to communicate between web applications and web servers."
},
{
    skill: "Web security",
    description: "The practice of protecting web applications and web content from security threats such as hacking, malware, and unauthorized access."
},
{
    skill: "Version control",
    description: "The practice of tracking and managing changes to source code and other files using a version control system such as Git."
},
{
    skill: "Testing",
    description: "The practice of evaluating the quality and functionality of web applications using automated and manual testing techniques."
},
{
    skill: "Performance optimization",
    description: "The practice of improving the speed and efficiency of web pages and web applications."
},
{
    skill: "Content management systems (CMS)",
    description: "Software systems used to create, manage, and publish digital content, such as blogs, articles, and web pages."
},
{
    skill: "Web development frameworks and libraries",
    description: "Collections of pre-written code and tools used to simplify and speed up the development of web applications."
},
{
    skill: "Single-page applications (SPAs)",
    description: "Web applications that load a single HTML page and dynamically update the content as the user interacts with the application."
},
{
    skill: "Progressive Web Apps (PWAs)",
    description: "Web applications that provide a native app-like experience on mobile devices by using web technologies and features such as offline support and push notifications."
}];

function getAll(){
    return skills;
}

function getOne(id){
    return skills[id];
}

function addSkill({...skill}){
    skills.push(skill);
    return;
}

function getCount(){
    return skills.length;
}

function deleteSkillData(id){
    skills.splice(id,1);
    return skills;
}

module.exports={getAll, getOne, addSkill, getCount, deleteSkillData};