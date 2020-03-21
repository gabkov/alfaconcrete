import React, { Component } from 'react'; import './App.css';

import "./decalare_modules.d.ts";

import Banner from './components/Banner.js';
import Mission from './components/Mission';
import Request from './components/Request';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Implementation from './components/Implementation';
import { Element } from "react-scroll";


class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000
    })
  }

  render() {
    return (
      <div>
        <Welcome />
        <div class="container body-content">
          <NavigationBar />
          <Banner />
          <Element name="mission">
            <Mission />
          </Element>
          <Element name="implementation">
            <Implementation />
            </Element>
          <Element name="request">
            <Request />
          </Element>
          <Element name="team">
            <Team />
          </Element>
          <Element name="contact" >
            <Contact />
          </Element>
          <Footer />

        </div>
      </div>
    )
  }
}

export default App;
