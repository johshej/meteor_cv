import React from 'react';
import { Link } from 'react-router';
const isLoggedIn = !! Meteor.userId();
	
export default class Header extends React.Component {
    constructor (props) {
	super(props);
	this.state = {
	    isLoggedIn: isLoggedIn
	};
    }
    
    onClick (e) {
	e.preventDefault();
	//	Meteor.logout();
	Meteor.logout (function (err) {
	    if (err) {
		Materialize.toast ("Logout failed: " + err.reason, 4000);
	    }
	    else {
		/*
		this.setState({
		    isLoggedIn: !this.state.isLoggedIn,
		});
		*/
		// redirect
		window.location.replace("/");
	    }
	});

    }
    
    render() {
	var navOptions;

	
	if (Meteor.userId()) { // logged in
	    navOptions = (
		<div>
		    <ul className="right hide-on-med-and-down">
			<li><a href="/">Om denne App</a></li>
			<li><a onClick={this.onClick} href="#">Log ud</a></li>
			<li><a href="/skills">Erfaringer</a></li>
{/*			<li><a href="/contact">Kontakt</a></li> */}
		    </ul>
		    <ul className="side-nav" id="mobile-demo">
			<li><a href="/">Om denne App</a></li>
			<li><a onClick={this.onClick} href="#">Log ud</a></li>
			<li><a href="/skills">Erfaringer</a></li>
{/*			<li><a href="/contact">Kontakt</a></li> */}
		    </ul>
		</div>
	    );
	}
	else {
	    navOptions = (
		<div>
		    <ul className="right hide-on-med-and-down">
			<li><a href="/">Om denne App</a></li>
			{/*<li><a href="/register">Registrer</a></li>*/}
			<li><a href="/login">Log ind</a></li>
		    </ul>
		    <ul className="side-nav" id="mobile-demo">
			<li><a href="/">Om denne App</a></li>
			{/*<li><a href="/register">Register</a></li>*/}
			<li><a href="/login">Log ind</a></li>
		    </ul>
		</div>
	    );
	}

	var navStyle = {
	    backgroundColor: "#1a237e",
	    paddingLeft: "12px"
	};
	
	return (
	    <nav style={navStyle}>
		<div className="nav-wrapper">
		    <a href="/" className="brand-logo">Curriculum Vitae</a>
		    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
		    {navOptions}
		</div>
	    </nav>
	);
    }
}

$(document).ready(function(){
    $(".button-collapse").sideNav();
    $(".dropdown-button").dropdown();
    
});
