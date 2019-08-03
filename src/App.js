import React, { Component } from 'react'; import './App.css';

import "./decalare_modules.d.ts";

import Banner from './components/Banner.js';
import Mission from './components/Mission';

import "react-bootstrap"
import AOS from 'aos';
import 'aos/dist/aos.css';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    AOS.init({
      duration: 2000
    })
  }

  render() {
    return (
      <div class="container">
        <Banner />
        <Mission />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
  }
}

export default App;
