import React from 'react';
import { MDBMedia } from 'mdbreact';

class Impl extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        <MDBMedia list className="mt-3">
      <MDBMedia tag="li">
        <MDBMedia left href="#">
          <MDBMedia object src="https://images.pexels.com/photos/236734/pexels-photo-236734.jpeg?cs=srgb&dl=architecture-art-background-236734.jpg&fm=jpg" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            List-based media object
          </MDBMedia>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </MDBMedia>
      </MDBMedia>
      <MDBMedia tag="li">
        <MDBMedia left href="#">
          <MDBMedia object src="https://images.pexels.com/photos/2376971/pexels-photo-2376971.jpeg?cs=srgb&dl=ashtray-chair-dining-room-2376971.jpg&fm=jpg" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            List-based media object
          </MDBMedia>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </MDBMedia>
      </MDBMedia>
      <MDBMedia tag="li">
        <MDBMedia left href="#">
          <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder5.jpg" alt="Generic placeholder image" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
            List-based media object
          </MDBMedia>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </MDBMedia>
      </MDBMedia>
    </MDBMedia>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Impl;
