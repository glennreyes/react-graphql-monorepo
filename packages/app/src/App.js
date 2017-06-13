import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  render() {
    const { title, intro } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {title && <h2>{title}</h2>}
        </div>
        {intro && <p className="App-intro">{intro}</p>}
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
`, {
  props: ({ data: { site } }) => ({
    title: site && site.title,
    intro: site && site.intro,
  }),
})(App);
