const root = document.getElementById('root');

root.innerHTML = "";
skillsData.forEach(skill=>{
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    const p = document.createElement('p');
    summary.innerText = skill.skill;
    p.innerText = skill.description;
    details.appendChild(summary);
    details.appendChild(p);
    root.appendChild(details);
});