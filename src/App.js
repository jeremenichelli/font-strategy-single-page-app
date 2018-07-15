import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Content from './Content'
import Title from './Title'
import './App.css';

class App extends Component {
  componentDidMount() {
    // import font bundle
    import('./font.js')
  }

  render() {
    return (
      <div className="App">
        <Title>
          Font loading strategy for single page apps
        </Title>
        <Content>
          This React application loads a separate bundle <em>on mount</em> that observes web fonts and switch to them when ready to not block content using dynamic import and font face observer package.
        </Content>
        <Content>
          <em>Find out how it is done in <a href="https://jeremenichelli.io/2018/07/font-loading-strategy-single-page-applications/">this article</a></em>
        </Content>
        <Content>
          by <a href="https://jeremenichelli.io">Jeremias Menichelli</a>
        </Content>
      </div>
    );
  }
}

export default App;
