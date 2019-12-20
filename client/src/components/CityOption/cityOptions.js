import React from 'react';
import AppNavbar from '../AppNavbar/AppNavBar';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { getCities, getCity, addCity } from '../../actions/cityActions';

class cityOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            citySelected: []
        }
    }

    async componentDidMount() {
        await this.props.getCities() // llamo a la funcion que genera como prop en el dispatch
        this.setState({
            cities: this.props.cities,
        })
    }

    getCity = async (event) => {
        // console.log(event.target.value)
        await this.props.getCity(event.target.value)
        this.setState({
            citySelected: this.props.citySelected,
        })
    }

    collectData = () => {
        console.log(this.state.citySelected)
        // this.props.addCity(this.state.citySelected)
    }

    create = () => {
        const fd = new FormData();
        fd.append('id', this.state.firstName)
        fd.append('name', this.state.lastName)
        fd.append('country', this.state.password)
        fd.append('image', this.state.profilePic);
        
        this.props.createAccount(fd);
        this.setState( {
            firstName: "",
                lastName: "",
                username: "",
                password: "",
                email: "",
                profilePic: null
        })
    }

    render() {
        return(
            <div>
                <AppNavbar/>

                <Form>
                    <FormGroup>
                        <Label for="idCity">Id</Label>
                        {/* <Input type="text" name="idCity" id="idCity" placeholder=""/> */}
                        { this.state.citySelected !== [] ?  
                            <Input type="text" name="idCity" id="idCity" placeholder="" value={this.props.citySelected._id } disabled/> : 
                            <Input type="text" name="idCity" id="idCity" placeholder="" value="asd"/>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        { this.state.citySelected !== [] ?  
                            <Input type="text" name="city" id="cityName" placeholder="" value={this.props.citySelected.name } /> : 
                            <Input type="text" name="city" id="cityName" placeholder="" />}
                        
                    </FormGroup>
                    <FormGroup>
                        <Label for="country">Country</Label>
                        { this.state.citySelected !== [] ?  
                            <Input type="text" name="country" id="countryName" placeholder="" value={this.props.citySelected.country }/> : 
                            <Input type="text" name="country" id="countryName" placeholder="" />}
                    </FormGroup>
                    
                    <div>
                    <Label for="exampleFile">File</Label>
                    <Input onChange={this.onChangeImage} type="file" name="image" id="image" />
                    </div>

                    <FormGroup>
                        <Label for="selectCountry">Select country</Label>
                        <Input type="select" name="select" id="selectCountry" onChange={this.getCity}>
                        <option value="" selected disabled hidden>Choose here</option>
                        {this.state.cities.map( city => {return <option value={city._id}>{city.name}</option>} )}
                        {/* {this.state.data[0].map( x => { return <option>{x}</option> })} */}
                        </Input>
                    </FormGroup>
                    <Button onClick={this.collectData} >Anadir ciudad</Button>
                    <br></br>
                    <Button>Modificar ciudad</Button>
                    <br></br>
                    <Button>Eliminar ciudad</Button>
                    </Form> 
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //Voy a tomar el estado y lo voy a generar como propiedad para el componente\
    return {
        cities: state.cityReducer.cities,
        citySelected: state.cityReducer.city
    };
};

//regresa creadores de acciones (action creators)
const mapDispatchToProps = (dispatch) => {
    return {
        getCities: () => dispatch(getCities()),
        getCity: (_id) => dispatch(getCity(_id)),
        addCity: (cityData) => dispatch(addCity(cityData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(cityOptions);
