import React from 'react';
import { connect } from 'react-redux';
import AppNavBar from '../AppNavbar/AppNavBar';
import { IdentifyUser } from '../../actions/userActions';

class LoadUser extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            token: this.props.match.params.token || localStorage.getItem("token")
        }
    };


    // this.props.match.params
    render() {
        this.props.IdentifyUser(this.state.token);
        this.props.history.push('/');
        return(
            <div>
                <AppNavBar/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        IdentifyUser: (token) => dispatch(IdentifyUser(token)),
    };
};

export default connect(null, mapDispatchToProps)(LoadUser);