import React from 'react';
import SkillListSection from './SkillListSection.jsx';


function getAllLevels() {
    return SkillLevels.find();
}

const labels = {
    skills: 'Erfaringer'
}

function SkillsListWrapper() {
    return (
	<div className='SkillListWrapper flow-text'>
	    <h4>{labels.skills}</h4>
	    <ul className="collapsible" data-collapsible="accordion">
		{getAllLevels().map( (level)=>{
		     return <SkillListSection key={level._id} level={level} />
		 })}
	    </ul>
	</div>
    );
}

export default SkillsListWrapper;
