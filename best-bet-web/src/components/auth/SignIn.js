import React, { Component } from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput
} from 'mdbreact';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';

import { signIn} from '../../actions/authActions';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        const {target} = e;

        this.setState( state => ({
            ...state,
            [target.id]: target.value
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state);

        const {props, state} = this;
        const {firebase } = props;
        const credentials = {...state};
        const authData = {
            firebase,
            credentials,
        };

        props.signIn(authData);
        // this.props.signIn(this.state);
    }

    render() {
        const {auth, authError} = this.props;
        // make sure user can't access login page on the browser
        if(auth.uid){
            return <Redirect to="/" />
        }
        return (
            <div className="container">
            <MDBContainer className="login-container justify-content-center ">
                <MDBRow className="login-container">
                    <MDBCol className="justify-content-center ">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardHeader className="form-header warm-flame-gradient rounded center">
                                <h3 className="my-3">
                                    <MDBIcon icon="lock" color="white"/> Login
                                </h3>
                                </MDBCardHeader>
                                <form className="md-form" onSubmit={this.handleSubmit}>
                                    <div className="grey-text">
                                    <MDBInput
                                        id="email"
                                        label="Enter your email address"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={this.handleChange}
                                    />
                                    <MDBInput
                                        id="password"
                                        label="Enter your password"
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                        onChange={this.handleChange}
                                    />
                                    </div>

                                    <div className="text-center mt-4">
                                        <MDBBtn color="deep-orange" className="btn mb-3" type="submit" onSubmit={this.handleSubmit}>
                                            Login
                                        </MDBBtn>
                                        {authError ? <div className="red-text center"><p>{authError}</p></div> : null}
                                    </div>
                                </form>
                                <MDBModalFooter className="text-center">
                                    <div className="font-weight-light text-center">
                                    <p>Not a member? <a href="/signup">Sign Up</a></p>
                                    <p>Forgot Password?</p>
                                    </div>
                                </MDBModalFooter>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials)),
    }
    
};

export default compose(
    firebaseConnect(),
    connect(mapStateToProps, mapDispatchToProps),
)(SignIn);
