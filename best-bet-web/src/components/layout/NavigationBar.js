import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavigationBar = (props) => {

    const { auth, profile } = props;

    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />
    return (
        // <div className="navbar-fixed">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top grey darken-3">
                <div className="container-fluid side-bar-section grey darken-3">
                    <a className="brand-logo" href='/'>Iosif-Portofolio.com</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul id="nav-mobile" className="navbar-nav ml-auto mt-lg-0 show-on-med-and-down">
                            {/* <li><Link to="/"><i className="small material-icons left">home</i> Home</Link></li> */}
                            <li className="nav-item" data-targe="navbar-collapse.hide"><NavLink to="/"><i className="small material-icons left nav-icons">home</i> Home</NavLink></li>
                            <li className="nav-item"><NavLink to="/about"><i className="small material-icons left nav-icons">help</i> About Me</NavLink></li>
                            <li className="nav-item"><NavLink to="/contact"><i className="small material-icons left nav-icons">perm_contact_calendar</i> Contact</NavLink></li>
                            <li className="nav-item">{links}</li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        // </div>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(
    mapStateToProps,
)(NavigationBar);