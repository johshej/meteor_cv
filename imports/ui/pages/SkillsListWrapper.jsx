import React from 'react';
import SkillSingle from './SkillSingle.jsx';
import SkillListSection from './SkillListSection.jsx';


//Skills = new Mongo.Collection("Skills");
//SkillDescription = new Mongo.Collection ("SkillDescription");


function getAllLevels() {
    return SkillLevels.find();
}

function getLevel(level) {
    var levelObj = SkillLevels.find( { Level: level } );
    console.log('level obj', levelObj);
    return levelObj;
}

function getLevelDescription(level) {
    return getLevel(level).Description;
}

function getSkillsForLevel(level) {
    return Skills.find( { Level: level }, {sort: { Skill: 1 } } );
}

const labels = {
    technology: 'Teknologi',
    expirience: 'Erfaring',
    level: 'Niveau',
    skills: 'Erfaringer'
}

const levels = 5;
let level = levels;

function SkillsListWrapper() {
    return (
	<div className='SkillListWrapper flow-text'>
	    <h4>{labels.skills}</h4>
	    <ul className="collapsible" data-collapsible="accordion">
		<li>
		    <div className="collapsible-header">
			<b>Niveau {level --}</b>
		    </div>
		    <div className="collapsible-body">
			<p className="caption">
			    Ekspert niveau med mange års erfaring.
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
				    {getSkillsForLevel(level+1).map( (skill)=>{
					 return <SkillSingle key={skill._id} skill={skill} />
				     })}
				</tbody>
			    </table>
			    
			  
			</p>
		    </div>
		</li>
		<li>
		    <div className="collapsible-header">
			<b>Niveau {level --}</b>
		    </div>
		    <div className="collapsible-body">
			<p className="caption">
			    Mange års erfaring og/eller nylig erfaring på kundeprojekter.
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
				    {getSkillsForLevel(level+1).map( (skill)=>{
					 return <SkillSingle key={skill._id} skill={skill} />
				     })}
				</tbody>
			    </table>
			    
			  
			</p>
		    </div>
		</li>
		<li>
		    <div className="collapsible-header">
			<b>Niveau {level --}</b>
		    </div>
		    <div className="collapsible-body">
			<p className="caption">
			    Praktisk anvendt i væsentlig grad.
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
				    {getSkillsForLevel(level+1).map( (skill)=>{
					 return <SkillSingle key={skill._id} skill={skill} />
				     })}
				</tbody>
			    </table>
			    
			  
			</p>
		    </div>
		</li>
		<li>
		    <div className="collapsible-header">
			<b>Niveau {level --}</b>
		    </div>
		    <div className="collapsible-body">
			<p className="caption">
			    Anvendt på kunderelaterede projekter dog i mindre grad eller tilbage i tiden.
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
				    {getSkillsForLevel(level+1).map( (skill)=>{
					 return <SkillSingle key={skill._id} skill={skill} />
				     })}
				</tbody>
			    </table>
			    
			  
			</p>
		    </div>
		</li>
		<li>
		    <div className="collapsible-header">
			<b>Niveau {level --}</b>
		    </div>
		    <div className="collapsible-body">
			<p className="caption">
			    Kendte teknologier med mindre praktisk erfaring.
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
				    {getSkillsForLevel(level+1).map( (skill)=>{
					 return <SkillSingle key={skill._id} skill={skill} />
				     })}
				</tbody>
			    </table>
			    
			  
			</p>
		    </div>
		</li>
		
		
	    </ul>
	</div>
    );
}

export default SkillsListWrapper;
