import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { data: { site } } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {site && <h2>{site.title}</h2>}
        </div>
        {site && <p className="App-intro">{site.intro}</p>}
      </div>
    );
  }
}

export default graphql(gql`
  query {
    site {
      title
      intro
    }
  }
`)(App);
