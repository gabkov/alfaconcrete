import React from 'react';
import { Media } from "react-bootstrap";
import { Card, CardDeck } from "react-bootstrap";

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
                    <Card.Header as="h5">Csapatunk</Card.Header>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="https://www.ludoviccareme.com/files/image_211_image_fr.jpg" />
                            <Card.Body>
                                <Card.Title>Török Ádám</Card.Title>
                                <Card.Text>
                                    Kis jellemzés magamtokról, par szóban.
      </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://thisisedm.it/wp-content/uploads/2014/12/Richie-Hawtin.jpg" />
                            <Card.Body>
                                <Card.Title>Pádár Márton</Card.Title>
                                <Card.Text>
                                    Kis jellemzés magamtokról, par szóban. De lehet több is a doboz dinamikusan változik és
                                    ahhoz igazítja a méretet.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/56ccb96b1bbee0cce90d1ab9/1559924330657-SZNOJGYTTL91CXFOIY8I/ke17ZwdGBToddI8pDm48kHldqyjDwaeS7kYSmaCmglZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmTl_ALRZE0UkEheIF40jl8l-p-UjEfP0lrs6khMOijucIE9LbemCnC0mKIu4O-BCA/jonas_portraits023.jpg?format=500w" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    Kis jellemzés magamtokról, par szóban.
      </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardDeck>
                </Card>
            </div>
        );
    }
}

export default Team;
