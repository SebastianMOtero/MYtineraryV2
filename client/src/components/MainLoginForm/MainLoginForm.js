import React from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { logIn } from '../../actions/userActions'
import { logInGoogle } from '../../actions/userActions'
import { FaGoogle } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import './MainLoginForm.css'

class MainLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password: "",
            isLogged: false
        }
    }

    logIn = async() => {
        await this.props.logIn(this.state); 
    }

    logInGoogle = async() => {
        window.location.href = "http://localhost:5000/users/loginGoogle"
    }

    onChangeData= (e) => {
        var state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    render() {
        return (
            <div className="formLogin">
                <Row>
                    <Col><h5>Login</h5></Col>
                </Row>
                <Form>
                    <FormGroup row className="formGroup">
                        <Row>
                            <Col xs={3}>
                                <Label for="email">Email</Label>
                            </Col>
                            <Col xs={9} id="inputRight">
                                <Input 
                                    onChange={this.onChangeData} value={this.state.email} 
                                    type="email" name="email" id="email" placeholder="" 
                                />
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup row className="formGroup">
                        <Row>
                            <Col xs={3}>
                                <Label for="password">Password</Label>
                            </Col>
                            <Col xs={9}>
                                <Input 
                                    onChange={this.onChangeData} value={this.state.password} 
                                    type="password" name="password" id="password" placeholder="" 
                                />
                            </Col>
                        </Row>
                    </FormGroup> 

                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />
                            Remember me
                        </Label>
                    </FormGroup>

                    <FormGroup check row className="bottonLogin">
                        <Col sm={{ size: 5 }}>
                            {this.state.email === "" || this.state.password === "" ? (
                                <Button id="buttonLogin" onClick={this.logIn} disabled>Log In</Button>
                            ) : (
                                <Button id="buttonLogin" onClick={this.logIn} >Log In</Button>
                            )}
                        </Col>
                    </FormGroup>

                    <FormGroup check row className="bottonLogin" >
                        <Col sm={{ size: 5 }}>
                            <Button id="buttonGoogle" onClick={this.logInGoogle}> 
                                <FaGoogle id='g'/>Log in with Google</Button>
                        </Col>
                    </FormGroup>

                    <Row >
                        <Col xs={12}>
                            <p id="loginText">
                                Don't have a MYtinerary account yet?<br/>
                                You should create one! It's totally free<br/>
                                and only takes a minute.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <FormGroup check row className="bottonLogin">
                            <Col sm={{ size: 5 }}>
                                <Link to="/createAccount">
                                    <h5>Create Account</h5>
                                </Link>
                            </Col>
                        </FormGroup>
                    </Row>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.userReducer.isLogged
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (userData) => dispatch(logIn(userData)),
        logInGoogle: (userData) => dispatch(logInGoogle(userData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLoginForm);
