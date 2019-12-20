import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';
// actions importadas
import { getItineraries, getCity } from '../../actions/cityActions';

import AppNavBar from '../AppNavbar/AppNavBar';
import Footer from '../Footer/Footer';
import ItineraryBox from '../ItineraryBox/ItineraryBox';
import CityBox from '../CityBox/CityBox';

class ItinerariesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itineraries: [],
            loading: false,
            city: []
        }
    }

    async componentDidMount() {
        await this.props.getItineraries(this.props.match.params.cityId);
        await this.props.getCity(this.props.match.params.cityId);
        this.setState({ 
            itineraries: this.props.itineraries,
            loading: this.props.loading,
            city: this.props.city
        });
    }

    render() {
        return( 
            <div className="itinerariesPage">
            <AppNavBar/> {console.log(this.props.city)}
            <CityBox city={this.state.city}/>
            <ListGroup id="citiesList"> 
                {this.state.itineraries.map( (itinerary) => 
                    <ItineraryBox key={itinerary._id} itinerary={itinerary}/> )}              
            </ListGroup>
            <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    //Voy a tomar el estado y lo voy a generar como propiedad para el componente\
    return {
        itineraries: state.cityReducer.itineraries,
        loading: state.cityReducer.loading,
        city: state.cityReducer.city
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getItineraries: (cityId) => dispatch(getItineraries(cityId)),
        getCity: (cityId) => dispatch(getCity(cityId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItinerariesPage);