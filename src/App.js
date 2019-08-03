import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

class App extends Component {

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (
      <div class="container">
        <ul class="collapsible">
          <li>
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
          </li>
        </ul>
      </div>
    )
  }
}

export default App;
