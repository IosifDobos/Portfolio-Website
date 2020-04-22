import React, { Component } from 'react';
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
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import {signUp} from '../../actions/authActions';

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
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
        const {firebase} = props;
        const newUser = {...state};

        props.signUp(newUser, firebase);
    }

    render() {
        const { auth, authError } = this.props;
        //if user is logged in cannot access this page
        if (auth.uid) {
            return <Redirect to="/" />;
        }

        return (
            // <div className="container">
            //     <form onSubmit={this.handleSubmit} className="white">
            //         <h5 className="grey-text text-darken-3">Sign Up</h5>
            //         <div className="input-field">
            //             <label htmlFor="firstName">First Name</label>
            //             <input type="text" id="firstName" onChange={this.handleChange} />    
            //         </div>  
            //         <div className="input-field">
            //             <label htmlFor="lastName">Last Name</label>
            //             <input type="text" id="lastName" onChange={this.handleChange} />    
            //         </div>  
            //         <div className="input-field">
            //             <label htmlFor="email">Email</label>
            //             <input type="email" id="email" onChange={this.handleChange} />    
            //         </div>    
            //         <div className="input-field">
            //             <label htmlFor="password">Password</label>
            //             <input type="password" id="password" onChange={this.handleChange} />    
            //         </div>   
            //         <div className="input-field">
            //             <button type="submit" className="btn pink lighten-1 z-depth-0">Sign up</button> 
            //             {authError ? <div className="red-text center"><p>{authError}</p></div> : null}
            //         </div>   
            //     </form>                
            // </div>
            <MDBContainer className="container">
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardHeader className="form-header warm-flame-gradient rounded center">
                                <h3 className="my-3">
                                    <MDBIcon icon="lock" /> Sign Up
                                </h3>
                                </MDBCardHeader>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="file-field center">
                                            <div className="mb-4">
                                                <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg" 
                                                className="rounded-circle z-depth-1-half avatar-pic"
                                                alt="example placeholder avatar" />
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <div className="btn btn-mdb-color btn-rounded center">
                                                    <span>Add Profile Photo</span>
                                                    <input type="file" id="userImage"/>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="grey-text">
                                    <MDBInput
                                        id="firstName"
                                        label="Enter first name"
                                        icon="user"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={this.handleChange}
                                    />
                                    <MDBInput
                                        id="lastName"
                                        label="Enter your surname"
                                        icon="user"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={this.handleChange}
                                    />
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
                                    <MDBInput
                                        id="confirmPassword"
                                        label="Confirm password"
                                        icon="exclamation-triangle"
                                        group
                                        type="password"
                                        validate
                                        onChange={this.handleChange}
                                    />
                                    </div>

                                    <div className="text-center mt-4">
                                        <MDBBtn color="deep-orange" className="mb-3" type="submit" onSubmit={this.handleSubmit}>
                                            SignUp
                                        </MDBBtn>
                                        {authError ? <div className="red-text center"><p>{authError}</p></div> : null}
                                    </div>
                                </form>
                                <MDBModalFooter className="">
                                    <div className="font-weight-light">
                                    <p>Already a member? <a href="/signin">Login here!</a></p>
                                    {/* <p>Forgot Password?</p> */}
                                    </div>
                                </MDBModalFooter>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
};

const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
    authError: state.auth.authError,
});

const mapDispatchToProps = (dispatch) => ({
    signUp: (newUser, firebase) => dispatch(signUp(newUser, firebase)),
});

export default compose(
    firebaseConnect(),
    connect(mapStateToProps, mapDispatchToProps),
)(SignUp);
