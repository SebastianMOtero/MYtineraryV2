import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, Input, Spinner } from 'reactstrap';
import AppNavBar from '../AppNavbar/AppNavBar';
import CityBox from '../CityBox/CityBox';
import Footer from '../Footer/Footer';

import './Cities.css';
// actions importadas
import { getCities } from '../../actions/cityActions';

class CitiesPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            cities: [],
            loading: false
        };
    }
      
    async componentDidMount() {
        await this.props.getCities() // llamo a la funcion que genera como prop en el dispatch
        this.setState({
            cities: this.props.cities,
            loading: this.props.loading
        })
    }

    filterCities = (e) => { 
        let filteredCities = this.props.cities; //recibo las
        filteredCities = filteredCities.filter((city) => {
          let cityName = city.name.toLowerCase() + city.country.toLowerCase()
          return cityName.indexOf(
            e.target.value.toLowerCase()) === 0
        })
        this.setState({
          cities: filteredCities
        })
    }

    render() {  
        return(
            <div>  
                <AppNavBar/>
                
                <Input type="filter" name="cityFilter" id="cityFilter" 
                        placeholder="Search your city..." onChange={this.filterCities}/>
                { this.props.loading === true && 
                    <div id="ContainerSpinner">
                        <Spinner type="grow" style={{ width: '5rem', height: '5rem' }} />{' '}
                    </div>
                }
                { this.props.loading === false &&  
                    <ListGroup id="citiesList"> 
                        {this.state.cities.map( (city) => <CityBox key={city._id} city={city}/> )}              
                    </ListGroup>
                }
                <Footer/>
            </div>
        )
    }
}

//ACA ARRANCA EL PROGRAMA
const mapStateToProps = (state) => {
    //Voy a tomar el estado y lo voy a generar como propiedad para el componente\
    return {
        cities: state.cityReducer.cities,
        loading: state.cityReducer.loading,
    };
};

//regresa creadores de acciones (action creators)
const mapDispatchToProps = (dispatch) => {
    return {
        getCities: () => dispatch(getCities()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesPage);
