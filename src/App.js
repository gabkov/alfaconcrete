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
import Particles from 'react-particles-js';


const particlesOptions = {
  "particles": {
    "line_linked": {
      "color": "#000000"
    },
    "density_auto": true,
    "number": {
      "value": 500
    },
    "size": {
      "value": 5
    }
  }

};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }


  componentDidMount() {
    AOS.init({
      duration: 2000
    })
    this.setState({loading : false});
  }

  render() {
    return (
      <div>
        <Welcome/>
        <div class="container body-content">
          <NavigationBar/>
          <Banner />
          <Mission />
          <Implementation />
          <Request />
          <Team />
          <Contact />
          <Footer />

        </div>
      </div>
    )
  }
}

export default App;
