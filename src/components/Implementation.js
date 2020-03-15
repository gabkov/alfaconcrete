import React from 'react';
import { Media, Card, Collapse, Image } from "react-bootstrap";


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
                                            <div class="pulsing">
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
                                                        <iframe title="panels" src="https://drive.google.com/embeddedfolderview?id=1DaNo55AQn7hiiHuyd-jDvEQCjKfWiOnv#grid" class="drive_galery" ></iframe>
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
                                            <div class="pulsing">
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
                                                        <iframe title="tables" src="https://drive.google.com/embeddedfolderview?id=1o-1L6CYIx6848Adt8NUpNX6wSwVBRTBk#grid" class="drive_galery" ></iframe>
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
                                            <div class="pulsing">
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
                                                        <iframe title="vases" src="https://drive.google.com/embeddedfolderview?id=1B2T3Jv-aJ0oHxAkk7b8uFJtldpvPKN4o#grid" class="drive_galery" ></iframe>
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
