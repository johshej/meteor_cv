import React from 'react';

export default class SkillSingle extends React.Component {
    render () {
	return (
	    <tr>
		<td>{this.props.skill.Skill}</td>
		<td>
		    {this.props.skill.Expirience}
		</td>
		<td>{this.props.skill.Level}</td>
	    </tr>
	    
	);
    }
}
