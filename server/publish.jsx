Skills = new Mongo.Collection("skills");
SkillLevels = new Mongo.Collection ("skillLevels");
                       
Meteor.publish("allSkills", function() {
    return Skills.find();
});

