Meteor.methods({
    addSkills(skill) {
	if(!Meteor.userId()) {
	    throw new Meteor.Error('not-authorized');
	}
	
	Skills.insert({
	    text: skill,
	    complete: false,
	    createdAt: new Date(),
	    user: Meteor.userId()
	});
    },
    deleteSkill(skill) {
	if(Meteor.userId() !== skill.user) {
	    throw new Meteor.Error('not-authorized');
	}
	Skills.remove(skill._id);
    }    
});
