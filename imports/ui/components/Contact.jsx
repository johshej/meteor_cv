import React from 'react';


export default class Contact extends React.Component {
    onSubmit (e) {
	e.preventDefault();
	var ele = $(e.target);

	var email = ele.find('#email').val();
	var name = ele.find('#name').val();
	var comment = ele.find('#comment').val();
	
	console.log(name,email,comment);
	Materialize.toast ("Jo jo " + name, 4000);

	// https://docs.meteor.com/api/email.html#Email-send
	Meteor.call('sendEmail', {
	    to: 'johannes@hejslet.dk',
	    from: email,
	    subject: 'Kommentar fra CV App',
	    text: comment
	});
    }
    
    render () {
	return (
	    <div className="row flow-text">
		<h4 className="text-center">Kontakt</h4>
		<form onSubmit={this.onSubmit} className="col s12">
		    <div className="row">
			<div className="input-field col s12">
			    <input id="name" ref="name" type="text" className="validate" />
			    <label htmlFor="name">Navn</label>
			</div>
		    </div>
		    <div className="row">
			<div className="input-field col s12">
			    <input id="email" ref="email" type="email" className="validate" />
			    <label htmlFor="email">Email</label>
			</div>
		    </div>
		    <div className="row">
			<div className="input-field col s12">
			    <input id="comment" ref="comment" type="text" className="validate" />
			    <label htmlFor="comment">Kommentar</label>
			</div>
		    </div>
		    
		    <div className="row">
			<button className="waves-effect waves-light btn btn-block">Submit</button>
		    </div>
		</form>
	    </div>

	);
    }
}
