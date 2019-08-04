import React from 'react';

class Particle extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        <div class="particles">
            <Particles
              params={particlesOptions}
            />
          </div>);
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Particle;
