import React from 'react';
import { Form, Button, Collapse, Card } from "react-bootstrap";

class Request extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    render() {
        const { open } = this.state;
        return (
            <div class="marginbottom" data-aos="flip-right" >
                <Button
                    onClick={() => this.setState({ open: !open })}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    size="lg"
                    variant="success"
                    block
                >
                    Ajánlat kérés
        </Button>

                <Card bg="light">
                    <Collapse in={this.state.open}>
                        <Card.Body>
                            <div id="example-collapse-text">
                                <Form action="https://formspree.io/reliefworld2019@gmail.com" method="POST">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email cím</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Add meg e-mail címed" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Üzenet</Form.Label>
                                        <Form.Control as="textarea" name="message" placeholder="Üzenet" rows="3" />
                                        <Form.Control type="text" name="_gotcha" id="gotcha" />
                                    </Form.Group>
                                    <Button variant="success" type="submit">
                                        Küldés
  </Button>
                                </Form>
                            </div>
                        </Card.Body>
                    </Collapse>
                </Card>
            </div>
        );
    }

    componentDidMount() {

    }
}

export default Request;
