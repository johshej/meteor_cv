import { Meteor } from 'meteor/meteor';
import React from 'react';


export default class Logout extends React.Component {
    
    render () {
	Meteor.logout (function (err) {
	    if (err) {
		Materialize.toast ("Logout failed: " + err.reason, 4000);
	    }
	    else {
		// redirect
		window.location.replace("/");
	    }
	});

	return (
	    <div className="row">
		<h4 className="text-center">Logout failed!</h4>
	    </div>
	);
    }
}
