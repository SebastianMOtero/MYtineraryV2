import React from 'react';
import { connect } from 'react-redux';
import { Spinner, ListGroup } from 'reactstrap';

// actions importadas
import { getItineraries } from '../../actions/cityActions';

import ItineraryBox from '../ItineraryBox/ItineraryBox';

class ItinerariesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itineraries: [],
            loading: false
        }
    }

    async componentDidMount() { console.log(this.props)
        await this.props.getItineraries(this.props.cityId);
        this.setState({ 
            itineraries: this.props.itineraries,
            loading: this.props.loading
        });
    }

    render() {
        return( 
            <div className="itinerariesList">
                { this.props.loading === true && 
                    <div>
                        <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
                        <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
                        <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
                    </div>
                }
                { this.props.loading === false &&  
                    <ListGroup id="itinerariesList"> 
                        {this.state.itineraries.map( (itinerary) => <ItineraryBox key={itinerary._id} itinerary={itinerary}/> )}              
                    </ListGroup>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    //Voy a tomar el estado y lo voy a generar como propiedad para el componente\
    return {
        itineraries: state.cityReducer.itineraries,
        loading: state.cityReducer.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getItineraries: (cityId) => dispatch(getItineraries(cityId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItinerariesList);