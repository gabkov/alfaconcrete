import React from 'react';

class Welcome extends React.Component {

    render() {
        return (
                <img
                class="elementToFadeInAndOut"
                    src={process.env.PUBLIC_URL + '/images/navbar/diamondlogo.png'}
                    alt="logo"
                />
        );
    }

    componentDidMount() {
        
    }
}

export default Welcome;
