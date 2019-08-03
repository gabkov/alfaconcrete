import React from 'react';
import { Carousel } from 'react-bootstrap';

import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
    "mdbreact";


class Banner extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class="marginbottom" data-aos="fade-in" data-aos-easing="ease-in-out">
                <MDBContainer>
                    <MDBCarousel
                        activeItem={1}
                        length={4}
                        showControls={true}
                        showIndicators={true}
                        className="z-depth-1"
                    >
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/1537008/pexels-photo-1537008.jpeg?cs=srgb&dl=architect-architecture-black-and-white-1537008.jpg&fm=jpg"
                                        alt="First slide"
                                        width="800"
                                        height="600"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?cs=srgb&dl=action-cement-construction-2219024.jpg&fm=jpg"
                                        alt="Second slide"
                                        width="800"
                                        height="600"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?cs=srgb&dl=arrangement-color-colors-159045.jpg&fm=jpg"
                                        alt="Third slide"
                                        width="800"
                                        height="600"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="4">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?cs=srgb&dl=architecture-background-brick-194096.jpg&fm=jpg"
                                        alt="Forth slide"
                                        width="800"
                                        height="600"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBContainer>
                <div id="alfabanner" class="jumbotron text-center">
                    <h1 class="display-4">Alfaconcrete Studio</h1>
                </div>
            </div>
        )
    }
}

export default Banner;
