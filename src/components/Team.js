import React from 'react';
import { Media } from "react-bootstrap";
import { Card } from "react-bootstrap";

class Team extends React.Component {
    constructor() {
        super();

    }

    componentDidMount() {

    }

    render() {
        return (
            <div class="container marginbottom" data-aos="zoom-in-up">
                <Card>
                    <Card.Body>
                        <Media>
                            <img
                                width={300}
                                height={200}
                                className="mr-3"
                                src="https://images.pexels.com/photos/1249158/pexels-photo-1249158.jpeg?cs=srgb&dl=businessmen-businesspeople-businesswomen-1249158.jpg&fm=jpg"
                                alt="A csapat"
                            />
                            <Media.Body>
                                <h5>Csapatunk</h5>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                    Donec lacinia congue felis in faucibus.
    </p>
                            </Media.Body>
                        </Media>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Team;
