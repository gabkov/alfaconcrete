import React from 'react';

class Welcome extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        return (
                <img
                class="elementToFadeInAndOut"
                    src={process.env.PUBLIC_URL + '/images/navbar/diamondlogo.png'}
                />
        );
    }

    componentDidMount() {
        
    }
}

export default Welcome;
