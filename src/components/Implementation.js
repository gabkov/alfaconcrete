import React from 'react';
import { Media, Card, Button, Collapse } from "react-bootstrap";
import Gallery from 'react-grid-gallery';


class Implementation extends React.Component {
    constructor() {
        super();
        this.state = {
            panelOpen: false
        }
        this.PANELIMAGES =
            [{
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
            },
            {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
            },

            {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212
            },
        ]

    }

    componentDidMount() {
    }

    render() {
        const { panelOpen } = this.state;
        return (
            <div data-aos="zoom-in-up" data-aos-easing="ease-in-out">
                <Card>
                    <Card.Header as="h5">Munkáink</Card.Header>
                    <Card.Body>
                        <ul className="list-unstyled">
                            <div class="works">
                                <Media as="li">
                                    <img
                                        onClick={() => this.setState({ panelOpen: !panelOpen })}
                                        aria-controls="panel-collapse"
                                        aria-expanded={panelOpen}
                                        width={64}
                                        height={64}
                                        className="mr-3"
                                        src="https://images.pexels.com/photos/236734/pexels-photo-236734.jpeg?cs=srgb&dl=architecture-art-background-236734.jpg&fm=jpg"
                                        alt="Generic placeholder"
                                    />
                                    <Media.Body>
                                        <h5>3D Panelek</h5>
                                        <p>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                            fringilla. Donec lacinia congue felis in faucibus.
      </p>
                                        <Collapse in={panelOpen} >
                                            <div id="panel-collapse">
                                                <Gallery images={this.PANELIMAGES} />
                                            </div>
                                        </Collapse>
                                    </Media.Body>
                                </Media>
                            </div>

                            <div class="works">
                                <Media as="li">
                                    <img
                                        width={64}
                                        height={64}
                                        className="mr-3"
                                        src="https://images.pexels.com/photos/2376971/pexels-photo-2376971.jpeg?cs=srgb&dl=ashtray-chair-dining-room-2376971.jpg&fm=jpg"
                                        alt="Generic placeholder"
                                    />
                                    <Media.Body>
                                        <h5>Asztalok</h5>
                                        <p>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                            fringilla. Donec lacinia congue felis in faucibus.
      </p>
                                    </Media.Body>
                                </Media>
                            </div>

                            <div class="works">
                                <Media as="li">
                                    <img
                                        width={64}
                                        height={64}
                                        className="mr-3"
                                        src="https://images.pexels.com/photos/220987/pexels-photo-220987.jpeg?cs=srgb&dl=bright-calm-ceiling-220987.jpg&fm=jpg"
                                        alt="Generic placeholder"
                                    />
                                    <Media.Body>
                                        <h5>Vázák, szobrok</h5>
                                        <p>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                            fringilla. Donec lacinia congue felis in faucibus.
      </p>
                                    </Media.Body>
                                </Media>
                            </div>
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        );
    }

}

export default Implementation;
