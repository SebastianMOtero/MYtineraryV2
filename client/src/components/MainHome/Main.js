import React from 'react'
import MainLogo from '../../assets/images/MYtineraryLogo.png';
import ButtonToCities from '../../assets/images/HomeButtonToCities.png'
import {Link} from 'react-router-dom'
import './Main.css'

class Main extends React.Component {
    render () {
        return (
            <div className="Main">
                <img src={MainLogo} id="Mainlogo" alt="MYtinerary Logo" />
                <p>Find your perfect trip, designed by insiders 
                    who know and love their cities.</p>
                <div id="ContainerButtonToCities">
                    <Link to="/cities/all">
                        <img src={ButtonToCities} id="ButtonToCities" alt="Go to cities list"/>
                    </Link>
                </div>
            </div>
        );
    }
  }

  export default Main