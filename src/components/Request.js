import React from 'react';
import { Form, Button, Collapse, Card } from "react-bootstrap";
import axios from "axios";

class Request extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            email: "",
            message: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault();

        let email = this.state.email;
        let message = this.state.message;
        let data = { email, message};

        axios.post('https://us-central1-alfaconcrete-93dcf.cloudfunctions.net/sendRequestMail', data)
            .then(response => {
                console.log(response)
                console.log("Mail sent.")
            })
            .catch(error => {
                console.log(error);
            });
    };

    handleEmailChange = event => {
        this.setState({email: event.target.value})
    }

    handleMessageChange = event => {
        this.setState({message: event.target.value})
    }

    render() {
        const { open, email, message } = this.state;
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
                    <Collapse in={open}>
                        <Card.Body>
                            <div id="example-collapse-text">
                                <Form onSubmit={this.handleSubmit} >
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email cím</Form.Label>
                                        <Form.Control type="email" name="email" value={email} onChange={this.handleEmailChange} placeholder="Add meg e-mail címed" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Üzenet</Form.Label>
                                        <Form.Control as="textarea" name="message" value={message} onChange={this.handleMessageChange} placeholder="Üzenet" rows="3" />
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
