import React from 'react';

class Welcome extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        return (
            <div class="elementToFadeInAndOut">
                <img
                    src={process.env.PUBLIC_URL + '/images/navbar/diamondlogo.png'}
                />
            </div>
        );
    }

    componentDidMount() {
        
    }
}

export default Welcome;
