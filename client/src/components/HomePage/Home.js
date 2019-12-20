import React from 'react';

import AppNavBar from '../AppNavbar/AppNavBar';
import Main from '../MainHome/Main';
import Carrousel from '../CarrouselCities/CarrouselCities';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        return(
            <div>
                <AppNavBar/>
                <Main/>
                <Carrousel/>
            </div>
        )
    }
}
export default Home;