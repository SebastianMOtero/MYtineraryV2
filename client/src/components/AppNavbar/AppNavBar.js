import React from 'react';
import { connect } from 'react-redux';
import './AppNavBar.css'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import { Link } from  'react-router-dom';
import userIcon from '../../assets/images/userIcon.png';

import { logOut } from '../../actions/userActions';

class AppNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      isLogged: false,
    }
  }
  // const [collapsed, setCollapsed] = useState(true);
  toggleNavbar = () => this.setState({collapsed: !this.state.collapsed});
  
  
  // const isLogged = props.isLogged;
  render() { console.log('NAVBAR');console.log(this.props.user)
  if (this.props.user.profilePic) {
    var url = ('http://localhost:5000/' + this.props.user.profilePic.split("\\").join("/"));

    if (this.props.user.profilePic.includes('google')) {
      url = ( this.props.user.profilePic.split("\\").join("/"));
    }
  }

    return ( 
      <div className = "AppNavBar"> 
      {/* <img src={process.env.PUBLIC_URL + this.props.user.profilePic} alt="logo" /> */}
        {console.log(this.props.isLogged)}
          <Navbar className="Navbar" color="faded" light>
            <UncontrolledDropdown nav inNavbar  className="userIcon" >
              <DropdownToggle nav>
              <div className="image-cropper">
                <img className="UserIconNavBar" 
                  src={ this.props.isLogged ? 
                  url : userIcon} alt="User" 
                />
              </div>
              </DropdownToggle>
              <DropdownMenu left="true">
                {
                  this.props.isLogged ? 
                  (
                    <div>
                      <DropdownItem>
                          {this.props.user.username}
                      </DropdownItem>
                      <DropdownItem divider />
                    </div>
                  ) : (
                    null
                  )
                }
                {
                  this.props.isLogged ? 
                  (
                    null
                  ) : (
                    <DropdownItem>
                      <Link to="/createAccount">
                              Create Account
                      </Link>
                    </DropdownItem>
                  )
                }
                <DropdownItem> 
                  { this.props.isLogged ? (
                    <Link to="/" onClick={this.props.logOut}>
                            Log Out
                    </Link> 
                  ) : (
                    <Link to="/LogIn">
                            Log In
                    </Link>
                  )
                  }
                </DropdownItem>
                      {/* <DropdownItem divider />
                      <DropdownItem>
                      Reset
                      </DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
          {/* Boton perfil */}
          {/* <NavbarBrand href="/">MYtinerary</NavbarBrand> */}
          {/* Boton Menu */}
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/cityOptions">
                  City Options
                </Link>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          {/* Boton menu */}
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //Voy a tomar el estado y lo voy a generar como propiedad para el componente\
  return {
      isLogged: state.userReducer.isLogged,
      user: state.userReducer.user
  };
};

//regresa creadores de acciones (action creators)
const mapDispatchToProps = (dispatch) => {
  return {
      logOut: () => dispatch(logOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavBar);

