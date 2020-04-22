import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

import { signOut} from '../../actions/authActions';


const SignedInLinks = (props) => {
    return (
        
        <ul className="right">
            <li className="nav-item"><NavLink to='/create-project'><i className="small material-icons left nav-icons">add</i>New Project</NavLink></li>
            <li className="nav-item"><NavLink to='/create-post'><i className="small material-icons left nav-icons">add</i>New Post</NavLink></li>
            <li className="nav-item"><a onClick={props.signOut} href='/'><i className="small material-icons left nav-icons">exit_to_app</i> Log Out</a></li>
            <li className="nav-item avatar dropdown id-logo">
                <NavLink to='/' className='rounded-circle z-depth-0 pink lighten-1'>{props.profile.initials}</NavLink>
            </li>
        </ul>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
};

export default connect(
    null,
    mapDispatchToProps
)(SignedInLinks);