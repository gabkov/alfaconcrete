import React from 'react';
import { Carousel } from 'react-bootstrap';


class Banner extends React.Component {

    render() {
        return (
            <div data-aos="fade-in" data-aos-easing="ease-in-out">
                <Carousel wrap={true}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/images/banner/architect.jpg'} 
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/images/banner/arrangement.jpg'}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/images/banner/brick.jpg'}
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/images/banner/cement.jpg'}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div id="alfabanner" class="jumbotron text-center">
                    <h1 class="display-4">Alfaconcrete Studio</h1>
                </div>
            </div>
        )
    }
}

export default Banner;
