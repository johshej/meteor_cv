import React from 'react';
import Header from '../components/Header.jsx';
import Register from '../components/Login/Register.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div>
          <Header />

        <main className="container">{this.props.children}</main>
      </div>
    );
  }
}
