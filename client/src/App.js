import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { connect } from 'react-redux';
//Paths
import Home from './components/HomePage/Home';
import Cities from './components/CitiesPage/Cities';
import Itineraries from './components/ItinerariesPage/ItinerariesPage';
import CreateAccountPage from './components/CreateAccountPage/CreateAccountPage';
import LogInPage from './components/LogInPage/LogInPage';
import LoadUser from './components/LoadUser/LoadUser';

import cityOptions from './components/CityOption/cityOptions';

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      // isLogged = false
    }
  };
  // asd = () => {
  //    if (!this.props.isLogged) { localStorage.removeItem('token') };
  // }
  render() {
    if (!this.props.isLogged) { localStorage.removeItem('token') };
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cities/all" component={Cities}/>
            <Route path="/cities/:cityId" component={Itineraries} />
            <Route path="/createAccount" component={CreateAccountPage}/>
            <Route path='/LogIn' component={ this.props.isLogged ? LoadUser : LogInPage}/>

            <Route path='/cityOptions' component={cityOptions} />
            <Route path="/loaduser/:token" component={LoadUser} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.userReducer.isLogged
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//       InitApp: () => dispatch(InitApp()),
//   };
// };

export default connect(mapStateToProps, null)(App);