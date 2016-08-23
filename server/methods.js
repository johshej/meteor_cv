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
    },
    sendEmail: function (to, from, subject, text) {
	check([to, from, subject, text], [String]);
	// Let other method calls from the same client start running,
	// without waiting for the email sending to complete.
	this.unblock();
	Email.send({
	    to: to,
	    from: from,
	    subject: subject,
	    text: text
	});
    }
});
