import React from 'react';



export default class Register extends React.Component {
    onSubmit (e) {
	e.preventDefault();
	var ele = $(e.target);
	
	var email = ele.find("#email").val();
	var password = ele.find("#password").val();
	var confirmPassword = ele.find("#confirmPassword").val();
	
	if (password ===confirmPassword && password !== "" && confirmPassword !== "") {
	    var accountInfo = {
		email: email,
		password: password
	    };
	    Accounts.createUser(accountInfo,function (err) {
		if (err) {
		    Materialize.toast ("There was en error while creating the account: " + err.reason, 4000);
		}
		else {
		    Materialize.toast ("Successfully logged in as user: " + email, 4000);
		    // redirect
		    window.location.replace("/");
		}
	    });
	}
	else {
	    Materialize.toast ("Your passwords do not match!", 4000);
	}
    }

    
    render () {
	return (
	    <div className="row">
		<h4 className="text-center">Register Account</h4>
		<form onSubmit={this.onSubmit} className="col s12">
		    <div className="row">
			<div className="input-field col s12">
			    <input id="email" type="email" className="validate" />
			    <label htmlFor="email">Email</label>
			</div>
		    </div>
		    <div className="row">
			<div className="input-field col s12">
			    <input id="password" type="password" className="validate" />
			    <label htmlFor="password">Password</label>
			</div>
		    </div>
		    <div className="row">
			<div className="input-field col s12">
			    <input id="confirmPassword" type="password" className="validate" />
			    <label htmlFor="confirmPassword">Confirm Password</label>
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
