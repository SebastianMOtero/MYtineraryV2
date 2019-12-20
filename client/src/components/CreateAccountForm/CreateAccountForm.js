import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';

import './CreateAccountForm.css'

import { createAccount } from '../../actions/userActions';

class CreateAccountForm extends React.Component {
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
    onChangeData= (e) => {
        var state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    onChangeImage = (e) => { 
        this.setState({
            profilePic: e.target.files[0]
        })
    }

    create = () => {
        const fd = new FormData();
        fd.append('firstName', this.state.firstName)
        fd.append('lastName', this.state.lastName)
        fd.append('password', this.state.password)
        fd.append('username', this.state.username)
        fd.append('email', this.state.email)
        fd.append('profilePic', this.state.profilePic);
        console.log(this.state.profilePic);
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
    //Tip: your component state should store all the input field values and dispatch an action only when the user clicks on submit.
    //username, password, email, firstname, lastname, profilePic, country voy a recolectar
    render() { 
        return (
            <div className="AccountForm">
                <h1>Create Account</h1>

                <Form encType="multipart/form-data" >
                    
                    <FormGroup row className="formGroup">
                        <Label for="username" sm={2}>Username</Label>
                        <Col sm={10}>
                        <Input onChange={this.onChangeData} value={this.state.username} type="text" name="username" id="username" placeholder="" />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="formGroup">
                        <Label for="password" sm={2}>Password</Label>
                        <Col sm={10}>
                        <Input onChange={this.onChangeData} value={this.state.password} type="password" name="password" id="password" placeholder="" />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="formGroup">
                        <Label for="email" sm={2}>Email</Label>
                        <Col sm={10}>
                        <Input onChange={this.onChangeData} value={this.state.email} type="email" name="email" id="email" placeholder="" />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="formGroup">
                        <Label for="firstName" sm={2}>First Name</Label>
                        <Col sm={10}>
                        <Input onChange={this.onChangeData} value={this.state.firstName} type="text" name="firstName" id="firstName" placeholder="" />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="formGroup">
                        <Label for="lastName" sm={2}>Last Name</Label>
                        <Col sm={10}>
                        <Input onChange={this.onChangeData} value={this.state.lastName} type="text" name="lastName" id="lastName" placeholder="" />
                        </Col>
                    </FormGroup>

                    <FormGroup row className="formGroup">
                        <Label for="country" sm={2}>Country</Label>
                        <Col sm={10}>
                        <Input type="select" name="country" id="country" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Label  for="profilePic">File</Label>
                        <Input onChange={this.onChangeImage}  type="file" name="profilePic" id="profilePic" />
                        <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </FormGroup>

                    <FormGroup check row id="buttonCreateAccount">
                        <Col sm={{ size: 10 }}>
                        <Button onClick={this.create}>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}


const mapStateToProps = state => {
    //Voy a tomar el estado y lo voy a generar como propiedad para el componente\
    return {
        status: state.userReducer.status
    };
};

//regresa creadores de acciones (action creators)
const mapDispatchToProps = (dispatch) => {
    return {
        createAccount: (userData) => dispatch(createAccount(userData)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountForm);
