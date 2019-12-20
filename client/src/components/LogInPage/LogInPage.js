import React from 'react';
import './LogInPage.css'
import AppNavBar from '../AppNavbar/AppNavBar'
import Footer from '../Footer/Footer'
import MainLoginForm from '../MainLoginForm/MainLoginForm';

class LogInPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password: "",
            user: []
        }
    }

    render() {

        return (
            <div>
                <AppNavBar/>
                <MainLoginForm/>
                <Footer/>
            </div>
        )
    }
}



export default LogInPage;
