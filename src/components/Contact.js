import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class Contact extends React.Component {
    constructor() {
        super();
        this.state = { someKey: 'someValue' };
    }

    render() {
        return (
            <div class="marginbottom" data-aos="zoom-in-up" data-aos-duration="1000">
                <Card >
                    <Card.Header>Kapcsolat</Card.Header>
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Tel.szám: +36 30 69 69 696</ListGroup.Item>
                            <ListGroup.Item>3200 Gyöngyös Bármilyen utca 10.</ListGroup.Item>
                            <ListGroup.Item>
                                <img class="socialicon img-hover-zoom" src="http://monarchiaoperett.hu/images/instagram-2-icon-256.png"
                                    height="40"
                                    width="40"
                                    alt="insta"
                                ></img>
                                <img class="socialicon img-hover-zoom" src="https://www.freepnglogos.com/uploads/facebook-icons/facebook-icon-transparent-background-3.png"
                                    height="40"
                                    width="40"
                                    alt="face"
                                ></img>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        );
    }

    componentDidMount() {
        this.setState({ someKey: 'otherValue' });
    }
}

export default Contact;
