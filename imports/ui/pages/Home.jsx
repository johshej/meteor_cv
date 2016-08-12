import React from 'react';
import classNames from 'classnames';

const linkColor = {
    color: 'white'
};

const rowStyle = {
    'padding-left': '12px',
}

const cardStyle = {
//    'padding-bottom': '2px',
}


function Home() {
  return (
    <div className="container">
	<h2>Velkommen</h2>
	<div className="chip">
	    <img src="images/Johannes_Hejslet_Joergensen_02.jpg" alt="Kontaktperson" />
	    Johannes Hejslet Jørgensen
	</div>
	<p className="flow-text section">
	    Denne app er udviklet af Johannes Hejslet Jørgensen med Javascript frameworket <a href="https://www.meteor.com">Meteor</a> og Facebooks <a href="https://facebook.github.io/react/">React</a>. Det er stylet med Googles <a href="http://materializecss.com/about.html">Material Design</a>.
	</p>
	<div className="divider"></div>
	<p className="flow-text section">
	    Erfarings-listen kan tilgås, via et modtaget login. Log ind <a href="/login">her</a>.
	</p>
	<p className="flow-text">
	    {/* Brug evt. kontaktformularen ved spørgsmål eller kommentarer: <a href="/contact">her</a>.<br />
	      <br /> */}
	      Venlig hilsen<br />
	      Johannes Hejslet Jørgensen
	  </p>
	  <br />


	  <div style={cardStyle} className="card blue-grey darken-1">
	      <div className="row card-content flow-text">
		  <div style={rowStyle} className="row">
		      <div className="col s12">
			  <div className="white-text">
			      <span className="card-title">Kontakt</span>
			  </div>
		      </div>
		  </div>
		  <div style={rowStyle} className="row">
		      <div className="col s1">
			  <div className="white-text">
			      <i className="material-icons">place</i>
			  </div>
		      </div>
		      <div className="col s11">
			  <div style={linkColor} className="white-text">
			      Gærdetofeen 30 <br />
			      8920 Randers NV
			  </div>
		      </div>
		  </div>
		  <div style={rowStyle} className="row">
		      <div className="col s1">
			  <div className="white-text">
			      <i className="material-icons">email</i>
			  </div>
		      </div>
		      <div className="col s11">
			  <div style={linkColor} className="white-text">
			      <a href="mailto:johannes@hejslet.dk">johannes@hejslet.dk</a>
			  </div>
		      </div>
		  </div>
		  <div style={rowStyle} className="row">
		      <div className="col s1">
			  <div className="white-text">
			      <i className="material-icons">phone</i>
			  </div>
		      </div>
		      <div className="col s11">
			  <div style={linkColor} className="cwhite-text">
			      6177 5150
			  </div>
		      </div>
		  </div>
	      </div>
	  </div>
	  
	  
	  
    </div>
  );
}

export default Home;
