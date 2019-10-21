import React from 'react';
import { Media, Card, Button, Collapse, Image } from "react-bootstrap";
import Gallery from 'react-grid-gallery';


class Implementation extends React.Component {
    constructor() {
        super();
        this.state = {
            panelOpen: false,
            tableOpen: false,
            vaseOpen: false,
            panelHovering: false,
            tableHovering: false,
            vaseHovering: false
        }
        this.PANELIMAGES =
            [{
                src: "./images/works/panels/cement.JPG",
                thumbnail: "./images/works/panels/cement.JPG",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Beton"
            },
            {
                src: "./images/works/panels/dark.JPG",
                thumbnail: "./images/works/panels/dark.JPG",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Feketés"
            },

            {
                src: "./images/works/panels/norm.JPG",
                thumbnail: "./images/works/panels/norm.JPG",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Stabil"
            },
            {
                src: "./images/works/panels/pexels.JPEG",
                thumbnail: "./images/works/panels/pexels.JPEG",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Díszes"
            },
            {
                src: "./images/works/panels/hard.JPEG",
                thumbnail: "./images/works/panels/hard.JPEG",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Szikla"
            },
            {
                src: "./images/works/panels/stone.JPEG",
                thumbnail: "./images/works/panels/stone.JPEG",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Kövek"
            }
            ]

        this.TABLEIMAGES =
            [{
                src: "./images/works/tables/coffee.JPG",
                thumbnail: "./images/works/tables/coffee.JPG",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Levél"
            },
            {
                src: "./images/works/tables/dining.JPG",
                thumbnail: "./images/works/tables/dining.JPG",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Levél"
            },

            {
                src: "./images/works/tables/cactus.JPG",
                thumbnail: "./images/works/tables/cactus.JPG",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Levél"
            },
            ]

        this.VASEIMAGES =
            [{
                src: "./images/works/vase/bloom.JPG",
                thumbnail: "./images/works/vase/bloom.JPG",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Levél"
            },
            {
                src: "./images/works/vase/plant.JPG",
                thumbnail: "./images/works/vase/plant.JPG",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Levél"
            },

            {
                src: "./images/works/vase/bottle.JPG",
                thumbnail: "./images/works/vase/bottle.JPG",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                thumbnailCaption: "Levél"
            },
            ]
    }

    componentDidMount() {
    }

    render() {
        const { panelOpen, tableOpen, vaseOpen } = this.state;
        return (
            <div class="marginbottom" data-aos="zoom-in-up" data-aos-duration="1000">
                <Card>
                    <Card.Header as="h5">Munkáink</Card.Header>
                    <Card.Body>

                        <ul className="list-unstyled">
                            <Card>
                                <Card.Body>
                                    <div class="works">
                                        <Media as="li">
                                            <div class="img-hover-zoom">
                                                <Image
                                                    onClick={() => this.setState({ panelOpen: !panelOpen })}
                                                    aria-controls="panel-collapse"
                                                    aria-expanded={panelOpen}
                                                    width={90}
                                                    height={90}
                                                    className="mr-3"
                                                    src={process.env.PUBLIC_URL + '/images/categories/panel.jpg'}
                                                    alt="Generic placeholder"
                                                    rounded
                                                />
                                            </div>
                                            <Media.Body>
                                                <div class="d-flex">
                                                    <h5 class="mr-auto p-2">3D Panelek</h5>
                                                    {!panelOpen ?
                                                        <img
                                                            class="arrow" 
                                                            src="http://www.myiconfinder.com/uploads/iconsets/256-256-1383000fade3dbdf3e93972212606011-Arrow.png"
                                                            width="15"
                                                            height="15"
                                                            onClick={() => this.setState({ panelOpen: !panelOpen })}
                                                        />
                                                        :
                                                        <img
                                                            class="arrow"
                                                            src="http://www.myiconfinder.com/uploads/iconsets/256-256-d52f5aa54a97cc505f266d8ac43ca421-Arrow.png"
                                                            width="15"
                                                            height="15"
                                                            onClick={() => this.setState({ panelOpen: !panelOpen })}
                                                        />
                                                    }
                                                </div>
                                                <p>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                                    fringilla. Donec lacinia congue felis in faucibus.
      </p>
                                                <div class="pictures">
                                                    <Collapse in={panelOpen} >
                                                        
                                                        <div id="panel-collapse">
                                                            <Gallery images={this.PANELIMAGES} enableImageSelection={false} margin={5}/>
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
                                            <div class="img-hover-zoom">
                                                <Image
                                                    onClick={() => this.setState({ tableOpen: !tableOpen })}
                                                    aria-controls="table-collapse"
                                                    aria-expanded={tableOpen}
                                                    width={90}
                                                    height={90}
                                                    className="mr-3"
                                                    src={process.env.PUBLIC_URL + '/images/categories/table.jpg'}
                                                    alt="Generic placeholder"
                                                    rounded
                                                />
                                            </div>
                                            <Media.Body>
                                                <div class="d-flex">
                                                    <h5 class="mr-auto p-2">Asztalok</h5>
                                                    {!tableOpen ?
                                                       <img
                                                       class="arrow" 
                                                       src="http://www.myiconfinder.com/uploads/iconsets/256-256-1383000fade3dbdf3e93972212606011-Arrow.png"
                                                       width="15"
                                                       height="15"
                                                       onClick={() => this.setState({ tableOpen: !tableOpen })}
                                                   />
                                                   :
                                                   <img
                                                       class="arrow"
                                                       src="http://www.myiconfinder.com/uploads/iconsets/256-256-d52f5aa54a97cc505f266d8ac43ca421-Arrow.png"
                                                       width="15"
                                                       height="15"
                                                       onClick={() => this.setState({ tableOpen: !tableOpen })}
                                                   />
                                                    }
                                                </div>
                                                <p>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                                    fringilla. Donec lacinia congue felis in faucibus.
      </p>
                                                <div class="pictures">
                                                    <Collapse in={tableOpen} >
                                                        <div id="table-collapse">
                                                            <Gallery images={this.TABLEIMAGES} enableImageSelection={false} margin={5} />
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
                                            <div class="img-hover-zoom">
                                                <Image
                                                    onClick={() => this.setState({ vaseOpen: !vaseOpen })}
                                                    aria-controls="vase-collapse"
                                                    aria-expanded={vaseOpen}
                                                    width={90}
                                                    height={90}
                                                    className="mr-3"
                                                    src={process.env.PUBLIC_URL + '/images/categories/vase.jpg'}
                                                    alt="Generic placeholder"
                                                    rounded
                                                />
                                            </div>
                                            <Media.Body>
                                                <div class="d-flex">
                                                    <h5 class="mr-auto p-2">Vázák, szobrok</h5>
                                                    {!vaseOpen ?
                                                        <img
                                                        class="arrow" 
                                                        src="http://www.myiconfinder.com/uploads/iconsets/256-256-1383000fade3dbdf3e93972212606011-Arrow.png"
                                                        width="15"
                                                        height="15"
                                                        onClick={() => this.setState({ vaseOpen: !vaseOpen })}
                                                    />
                                                    :
                                                    <img
                                                        class="arrow"
                                                        src="http://www.myiconfinder.com/uploads/iconsets/256-256-d52f5aa54a97cc505f266d8ac43ca421-Arrow.png"
                                                        width="15"
                                                        height="15"
                                                        onClick={() => this.setState({ vaseOpen: !vaseOpen })}
                                                    />
                                                    }

                                                </div>
                                                <p>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                                    fringilla. Donec lacinia congue felis in faucibus.
      </p>
                                                <div class="pictures">
                                                    <Collapse in={vaseOpen} >
                                                        <div class="pictures" id="vase-collapse">
                                                            <Gallery images={this.VASEIMAGES} enableImageSelection={false} margin={5} />
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
