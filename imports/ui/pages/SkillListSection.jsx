import React from 'react';
import SkillSingle from './SkillSingle.jsx';

function getSkillsForLevel(level) {
    return Skills.find( { Level: level }, {sort: { Skill: 1 } } );
}


const labels = {
    technology: 'Teknologi',
    expirience: 'Erfaring',
    level: 'Niveau',
}

export default class SkillListSection extends React.Component {
    render () {
	return (
	    <li>
	        <div className="collapsible-header">
	            <b>Niveau {this.props.level.Level}</b>
	        </div>
	        <div className="collapsible-body">
	            <p className="caption">
	                {this.props.level.Description}
	            </p>
	            <p>
	                <table className="table highlight">
	                    <thead>
	                        <tr>
	                            <th>{labels.technology}</th>
	                            <th>{labels.expirience}</th>
	                            <th>{labels.level}</th>
	                        </tr>
	                    </thead>
	                    <tbody>
	                        {getSkillsForLevel(this.props.level.Level).map( (skill)=>{
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
