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
                            <ListGroup.Item>Tel.szám: +36 20 422 0764</ListGroup.Item>
                            <ListGroup.Item>3200, Gyöngyös Zöldhíd utca 5. 2/1</ListGroup.Item>
                            <ListGroup.Item>
                                <a target="_blank" href="https://www.instagram.com/aranylo_vas/">
                                <img class="socialicon img-hover-zoom" src="http://monarchiaoperett.hu/images/instagram-2-icon-256.png"
                                    height="40"
                                    width="40"
                                    alt="insta"
                                ></img>
                                </a>
                                <a target="_blank" href="https://www.facebook.com/Aranyl%C3%B3-vas-104278354521849/">
                                <img class="socialicon img-hover-zoom" src="https://www.freepnglogos.com/uploads/facebook-icons/facebook-icon-transparent-background-3.png"
                                    height="40"
                                    width="40"
                                    alt="face"
                                ></img>
                                </a>
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
