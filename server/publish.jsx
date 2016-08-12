Skills = new Mongo.Collection("skills");

Meteor.publish("allSkills", function() {
    return Skills.find();
});

