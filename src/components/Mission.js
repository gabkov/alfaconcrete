import React from 'react';
import { Card } from "react-bootstrap";

class Mission extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.setState({ someKey: 'otherValue' });
    }

    render() {
        return (
            <div class="marginbottom" data-aos="zoom-in-up" data-aos-easing="ease-in-out">
                <Card>
                    <Card.Header as="h5">Küldetésünk</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        A beton mesterséges építőanyag, melynek összetevői a kavics, a homok, a cement és a víz. Erősen lúgos. Előnye, hogy bármilyen alakra formázható, megszilárdulva pedig nagy szilárdságú tartószerkezetként működik. Lényege, hogy a kőszerű, szemcsés összetevőket (kavics/kőtörmelék és homok), a cement, mint „kötőanyag” víz közreműködése mellett összeragasztja. A nagyobb szemcsés kavicsrész adja a beton „kőkemény” építőrészecskéit, a homok apró szemcséi a nagy kavicsok közti rések hézagmentes kitöltését biztosítják, a cement pedig ragasztóanyagként (kötőanyag) e szemcséket kőszerűen kemény anyaggá ragasztja össze kémiai-fizikai kötéssel. 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }


}

export default Mission;
