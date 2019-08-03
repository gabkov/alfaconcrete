import React from 'react';
import { Carousel } from 'react-bootstrap';


class Banner extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div data-aos="fade-in">
                <Carousel touch={true} wrap={true}>
                    <Carousel.Item>
                        <img
                            height="500"
                            width="500"
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/1537008/pexels-photo-1537008.jpeg?cs=srgb&dl=architect-architecture-black-and-white-1537008.jpg&fm=jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            height="500"
                            width="500"
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?cs=srgb&dl=action-cement-construction-2219024.jpg&fm=jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            height="500"
                            width="500"
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?cs=srgb&dl=arrangement-color-colors-159045.jpg&fm=jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            height="500"
                            width="500"
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?cs=srgb&dl=architecture-background-brick-194096.jpg&fm=jpgg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <h1 class="display-4">Alfaconcrete Studio</h1>
            </div>
        )
    }
}

export default Banner;
