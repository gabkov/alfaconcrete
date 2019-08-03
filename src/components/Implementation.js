import React from 'react';
import { Media, Card, Button, Collapse } from "react-bootstrap";
import Gallery from 'react-grid-gallery';
import posed from "react-pose";
import styled from "styled-components";


const Container = styled.div``;

const Square = posed.div({
    idle: { scale: 1 },
    hovered: { scale: 1.2 }
});

const StyledSquare = styled(Square)``;

class Implementation extends React.Component {
    constructor() {
        super();
        this.state = {
            panelOpen: true,
            tableOpen: false,
            vaseOpen: false,
            panelHovering: false,
            tableHovering : false,
            vaseHovering : false
        }
        this.PANELIMAGES =
            [{
                src: "https://images.pexels.com/photos/1092369/pexels-photo-1092369.jpeg?cs=srgb&dl=cement-colors-concrete-1092369.jpg&fm=jpg",
                thumbnail: "https://images.pexels.com/photos/1092369/pexels-photo-1092369.jpeg?cs=srgb&dl=cement-colors-concrete-1092369.jpg&fm=jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Beton"
            },
            {
                src: "https://images.pexels.com/photos/908286/pexels-photo-908286.jpeg?cs=srgb&dl=close-up-concrete-dark-908286.jpg&fm=jpg",
                thumbnail: "https://images.pexels.com/photos/908286/pexels-photo-908286.jpeg?cs=srgb&dl=close-up-concrete-dark-908286.jpg&fm=jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Feketés"
            },

            {
                src: "https://images.pexels.com/photos/247719/pexels-photo-247719.jpeg?cs=srgb&dl=architecture-background-black-and-white-247719.jpg&fm=jpg",
                thumbnail: "https://images.pexels.com/photos/247719/pexels-photo-247719.jpeg?cs=srgb&dl=architecture-background-black-and-white-247719.jpg&fm=jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Stabil"
            },
            ]

        this.TABLEIMAGES =
            [{
                src: "https://images.pexels.com/photos/1498964/pexels-photo-1498964.jpeg?cs=srgb&dl=coffee-communication-compose-1498964.jpg&fm=jpg",
                thumbnail: "https://images.pexels.com/photos/1498964/pexels-photo-1498964.jpeg?cs=srgb&dl=coffee-communication-compose-1498964.jpg&fm=jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Levél"
            },
            {
                src: "https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg?cs=srgb&dl=contemporary-decoration-dining-table-2092058.jpg&fm=jpg",
                thumbnail: "https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg?cs=srgb&dl=contemporary-decoration-dining-table-2092058.jpg&fm=jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Levél"
            },

            {
                src: "https://images.pexels.com/photos/2387754/pexels-photo-2387754.jpeg?cs=srgb&dl=bedside-table-book-cactus-2387754.jpg&fm=jpg",
                thumbnail: "https://images.pexels.com/photos/2387754/pexels-photo-2387754.jpeg?cs=srgb&dl=bedside-table-book-cactus-2387754.jpg&fm=jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Levél"
            },
            ]

        this.VASEIMAGES =
            [{
                src: "https://images.pexels.com/photos/870512/flowers-vase-decor-interior-870512.jpeg?cs=srgb&dl=bloom-blossom-flora-870512.jpg&fm=jpg",
                thumbnail: "https://images.pexels.com/photos/870512/flowers-vase-decor-interior-870512.jpeg?cs=srgb&dl=bloom-blossom-flora-870512.jpg&fm=jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Levél"
            },
            {
                src: "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?cs=srgb&dl=cactus-cactus-plant-contemporary-1005058.jpg&fm=jpg",
                thumbnail: "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?cs=srgb&dl=cactus-cactus-plant-contemporary-1005058.jpg&fm=jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Levél"
            },

            {
                src: "https://images.pexels.com/photos/5939/blue-glass-flower-decoration.jpg?cs=srgb&dl=alcohol-blue-bottle-5939.jpg&fm=jpg",
                thumbnail: "https://images.pexels.com/photos/5939/blue-glass-flower-decoration.jpg?cs=srgb&dl=alcohol-blue-bottle-5939.jpg&fm=jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Levél"
            },
            ]
    }

    componentDidMount() {
    }

    render() {
        const { panelOpen, tableOpen, vaseOpen, panelHovering, tableHovering, vaseHovering } = this.state;
        return (
            <div class="marginbottom" data-aos="zoom-in-up" data-aos-easing="ease-in-out">
                <Card>
                    <Card.Header as="h5">Munkáink</Card.Header>
                    <Card.Body>

                        <ul className="list-unstyled">
                            <Card>
                                <Card.Body>
                                    <div class="works">

                                        <Media as="li">
                                            <Container>
                                                <StyledSquare
                                                    pose={this.state.panelHovering ? "hovered" : "idle"}
                                                    onMouseEnter={() => this.setState({ panelHovering: true })}
                                                    onMouseLeave={() => this.setState({ panelHovering: false })}>
                                                    <img
                                                        onClick={() => this.setState({ panelOpen: !panelOpen })}
                                                        aria-controls="panel-collapse"
                                                        aria-expanded={panelOpen}
                                                        width={90}
                                                        height={90}
                                                        className="mr-3"
                                                        src="https://images.pexels.com/photos/236734/pexels-photo-236734.jpeg?cs=srgb&dl=architecture-art-background-236734.jpg&fm=jpg"
                                                        alt="Generic placeholder"
                                                    />
                                                </StyledSquare>
                                            </Container>
                                            <Media.Body>
                                                <h5>3D Panelek</h5>
                                                <p>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                                    fringilla. Donec lacinia congue felis in faucibus.
      </p>
                                                <div class="pictures">
                                                    <Collapse in={panelOpen} >
                                                        <div id="panel-collapse">
                                                            <Gallery images={this.PANELIMAGES} enableImageSelection={false} />
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            </Media.Body>
                                        </Media>

                                    </div>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Body>
                                    <div class="works">
                                        <Media as="li">
                                            <Container>
                                                <StyledSquare
                                                    pose={this.state.tableHovering ? "hovered" : "idle"}
                                                    onMouseEnter={() => this.setState({ tableHovering: true })}
                                                    onMouseLeave={() => this.setState({ tableHovering: false })}>
                                                    <img
                                                        onClick={() => this.setState({ tableOpen: !tableOpen })}
                                                        aria-controls="table-collapse"
                                                        aria-expanded={tableOpen}
                                                        width={90}
                                                        height={90}
                                                        className="mr-3"
                                                        src="https://images.pexels.com/photos/2376971/pexels-photo-2376971.jpeg?cs=srgb&dl=ashtray-chair-dining-room-2376971.jpg&fm=jpg"
                                                        alt="Generic placeholder"
                                                    />
                                                </StyledSquare>
                                            </Container>
                                            <Media.Body>
                                                <h5>Asztalok</h5>
                                                <p>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                                    fringilla. Donec lacinia congue felis in faucibus.
      </p>
                                                <div class="pictures">
                                                    <Collapse in={tableOpen} >
                                                        <div id="table-collapse">
                                                            <Gallery images={this.TABLEIMAGES} enableImageSelection={false} />
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            </Media.Body>
                                        </Media>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Body>
                                    <div class="works">
                                        <Media as="li">
                                            <Container>
                                                <StyledSquare
                                                    pose={this.state.vaseHovering ? "hovered" : "idle"}
                                                    onMouseEnter={() => this.setState({ vaseHovering: true })}
                                                    onMouseLeave={() => this.setState({ vaseHovering: false })}>
                                                    <img
                                                        onClick={() => this.setState({ vaseOpen: !vaseOpen })}
                                                        aria-controls="vase-collapse"
                                                        aria-expanded={vaseOpen}
                                                        width={90}
                                                        height={90}
                                                        className="mr-3"
                                                        src="https://images.pexels.com/photos/220987/pexels-photo-220987.jpeg?cs=srgb&dl=bright-calm-ceiling-220987.jpg&fm=jpg"
                                                        alt="Generic placeholder"
                                                    />
                                                </StyledSquare>
                                            </Container>
                                            <Media.Body>
                                                <h5>Vázák, szobrok</h5>
                                                <p>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                                    fringilla. Donec lacinia congue felis in faucibus.
      </p>
                                                <div class="pictures">
                                                    <Collapse in={vaseOpen} >
                                                        <div class="pictures" id="vase-collapse">
                                                            <Gallery images={this.VASEIMAGES} enableImageSelection={false} />
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            </Media.Body>
                                        </Media>
                                    </div>
                                </Card.Body>
                            </Card>
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        );
    }

}

export default Implementation;
