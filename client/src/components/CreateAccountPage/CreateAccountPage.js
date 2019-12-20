import React from 'react';
import AppNavBar from '../AppNavbar/AppNavBar';
import Footer from '../Footer/Footer';
import CreateAccountForm from '../CreateAccountForm/CreateAccountForm';

import './CreateAccountPage.css'


class CreateAccountPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                firstName: "",
                lastName: "",
                username: "",
                password: "",
                email: "",
                profilePic: null
        }
    }
    //Tip: your component state should store all the input field values and dispatch an action only when the user clicks on submit.
    //username, password, email, firstname, lastname, profilePic, country voy a recolectar
    render() { 
        return (
            <div>
                <AppNavBar/>
                <CreateAccountForm/>
                <Footer/>
            </div>
        )
    }
}


export default CreateAccountPage;
