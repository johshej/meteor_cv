import React from 'react';


export default class SkillListSection extends React.Component {
    render () {
	return (
	    <li>
		<div className="collapsible-header">
		    <b>Level 5 section</b>
		</div>
		<div className="collapsible-body">
		    <p className="caption">
			Level 5 means that I've worked with this for many years, used it a lot in many projects and can be considered to be an expert.
		    </p>
		    <p>
			<table className="table highlight">
			    <thead>
				<tr>
				    <th>Tecnology</th>
				    <th>Expirience</th>
				    <th>Level</th>
				</tr>
			    </thead>
			    <tbody>
				{getAllSkills().map( (skill)=>{
				     return <SkillSingle key={skill._id} skill={skill} />
				 })}
			    </tbody>
			</table>
			
			
		    </p>
		</div>
	    </li>
	);
    }
}



