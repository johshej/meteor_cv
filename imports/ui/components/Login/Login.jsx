import React from 'react';


export default class Login extends React.Component {
    onSubmit (e) {
	e.preventDefault();
	var ele = $(e.target);

	var email = ele.find('#email').val();
	var password = ele.find('#password').val();
	//console.log(this.refs);
//	var email = this.refs[email].getDOMNode().value;
//	var email = this.refs.email.getDOMNode().value;
//	var email = React.findDOMNode(this.refs.email).value;
	
	Meteor.loginWithPassword(email,password, function(err) {
	    if (err) {
		Materialize.toast ("Login failed: " + err.reason, 4000);
	    }
	    else {
		// redirect
		window.location.replace("/skills");
	    }
	})
    }
    
    render () {
	return (
	    <div className="row">
		<h4 className="text-center">Login</h4>
		<form onSubmit={this.onSubmit} className="col s12">
		    <div className="row">
			<div className="input-field col s12">
			    <input id="email" ref="email" type="email" className="validate" />
			    <label htmlFor="email">Email</label>
			</div>
		    </div>
		    <div className="row">
			<div className="input-field col s12">
			    <input id="password" ref="password" type="password" className="validate" />
			    <label htmlFor="password">Password</label>
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
