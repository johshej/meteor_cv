//Meteor.startup(function () {
Skills = new Mongo.Collection(null);
SkillLevels = new Mongo.Collection (null);


if (Skills.find().count() < 1) {
    
    console.log ('inserting data');

			
    SkillLevels.insert ({
	Level: 5,
	Description: 'Ekspert niveau med mange års erfaring.'
    });

    SkillLevels.insert ({
	Level: 4,
	Description: 'Mange års erfaring og/eller nylig erfaring på kundeprojekter.'
    });

    SkillLevels.insert ({
	Level: 3,
	Description: 'Praktisk anvendt i væsentlig grad.'
    });

    SkillLevels.insert ({
	Level: 2,
	Description: 'Anvendt på kunderelaterede projekter dog i mindre grad eller tilbage.'
    });

    SkillLevels.insert ({
	Level: 1,
	Description: 'Kendte teknologier med mindre praktisk erfaring.'
    });
    
    // Level 5
    Skills.insert ({
	Skill: 'PHP',
	Expirience: '15 års erfaring. Booking systemer, shops med betalingsintegration, CRM, sikkerheds certificering, PDF generering. Et væld ef systemer og integration i både stor og lille skala.',
	Level: 5
    });

    Skills.insert ({
	Skill: 'MySQL',
	Expirience: '15 års erfaring. Herunder design, videreudvikling og optimering af store komplekse databaser.',
	Level: 5
    });

    Skills.insert ({
	Skill: 'Git',
	Expirience: 'Foretrukne versionsstyring.',
	Level: 5
    });

    Skills.insert ({
	Skill: 'SVN',
	Expirience: '12 års erfaring.',
	Level: 5
    });

    Skills.insert ({
	Skill: 'Apache',
	Expirience: '15 års erfaring.',
	Level: 5
    });

    Skills.insert ({
	Skill: 'Shell scripting',
	Expirience: 'Scripts til automatisering eller forenkling af arbejdsgange.',
	Level: 5
    });

    Skills.insert ({
	Skill: 'Engelsk',
	Expirience: 'Stærk skriftligt og mundtligt. Mange års praktisk anvendelse.',
	Level: 5
    });

    Skills.insert ({
	Skill: 'Javascript',
	Expirience: '15 års erfaring. Herunder jQuery, React og en lang række andre libraries.',
	Level: 4
    });

    Skills.insert ({
	Skill: 'CSS',
	Expirience: '7 års erfaring. Bl.a. Material Design og bootstrap.',
	Level: 4
    });

    Skills.insert ({
	Skill: 'Phing',
	Expirience: 'Scripts til opdatering og monitorering af mange systemer på én gang.',
	Level: 4
    });

    Skills.insert ({
	Skill: 'Facebook integration',
	Expirience: 'I flere varianter med PHP, TYPO3 og Meteor.',
	Level: 4
    });

    Skills.insert ({
	Skill: 'Mailchimp',
	Expirience: 'Konfiguration og integration.',
	Level: 4
    });

    Skills.insert ({
	Skill: 'MongoDB',
	Expirience: 'Anvenendt i Meteor projekter.',
	Level: 2
    });

    Skills.insert ({
	Skill: 'Meteor',
	Expirience: 'Talks, tutorials, web og mobil apps.',
	Level: 2
    });

    Skills.insert ({
	Skill: 'Scrum',
	Expirience: 'Kender koncepterne og praktisk erfaring i kortere periode.',
	Level: 3
    });

    Skills.insert ({
	Skill: 'Nginx',
	Expirience: 'Har sat ny server op med bl.a. Nginx.',
	Level: 3
    });

    Skills.insert ({
	Skill: 'CRM udvikling',
	Expirience: 'Udvikling af CRM produkt.',
	Level: 3
    });

    Skills.insert ({
	Skill: 'Laravel',
	Expirience: 'Tutorials og debugging af projekt.',
	Level: 2
    });

    Skills.insert ({
	Skill: 'Solr',
	Expirience: 'Integration til solr søgning.',
	Level: 2
    });

    Skills.insert ({
	Skill: 'Composer',
	Expirience: 'Brugt i en række projekter samt til installation af TYPO3.',
	Level: 2
    });

    Skills.insert ({
	Skill: 'Jenkins',
	Expirience: 'Automatiseret test.',
	Level: 2
    });

    Skills.insert ({
	Skill: 'Tysk',
	Expirience: '',
	Level: 2
    });

    Skills.insert ({
	Skill: 'Typescript',
	Expirience: 'Brugt i forbindelse med tutorials.',
	Level: 1
    });

    Skills.insert ({
	Skill: 'Redis',
	Expirience: 'Læsning og test.',
	Level: 0
    });

    Skills.insert ({
	Skill: 'RabbitMQ',
	Expirience: 'Talk',
	Level: 0
    });

    Skills.insert ({
	Skill: 'Docker',
	Expirience: 'Læsning.',
	Level: 0
    });



    /*



      
      Skills.insert ({
      Skill: 'PHP',
      Expirience: '15 års erfaring. Booking systemer, shops med betalingsintegration, CRM, sikkerheds certificering, PDF generering. Både backend og frontend. Et væld er systemer og integration i både stor og lille skala.',
      Level: 5
      });
      Skills.insert ({
      Skill: 'MYSQL',
      Expirience: '15 års erfaring. Herunder design, videreudvikling og optimering af store komplekse databaser.',
      Level: 5
      });
      Skills.insert ({
      Skill: 'Git',
      Expirience: 'Foretrukne versionsstyring.',
      Level: 5
      });
      
      Skills.insert ({
      Skill: 'SVN',
      Expirience: '12 års erfaring.',
      Level: 5
      });

      Skills.insert ({
      Skill: 'Apache',
      Expirience: '15 års erfaring.',
      Level: 5,
      });
      // Level 4
      Skills.insert ({
      Skill: 'JavaScript',
      Expirience: '15 års erfaring. Herunder jQuery, React og en lang række andre libraries.',
      Level: 4
      });
      
      Skills.insert ({
      Skill: 'Phing',
      Expirience: 'Scripts til opdatering og monitorering af mange systemer på én gang.',
      Level: 4
      });
      
      Skills.insert ({
      Skill: 'Facebook integration',
      Expirience: 'I flere varianter med PHP, TYPO3 og Meteor.',
      Level: 4
      });
    */  
}
//});

/*

  Kan findes i Console i browseren med: Skills.find()
  under:
  L...n.Cursor....->collection->_docs->_map->
*/
