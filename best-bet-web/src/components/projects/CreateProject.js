import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import createProject from '../../actions/projectActions';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
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
        props.createProject(state);

        props.history.push('/dashboard');
    }

    render() {
        const { auth } = this.props;
        
        if (!auth.uid) {
            return <Redirect to="/signin" />;
        }

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />    
                    </div>    
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea name="content" className="materialize-textarea" cols="30" rows="10" id="content" onChange={this.handleChange}></textarea>    
                    </div>   
                    <div className="input-field">
                        <button type="submit" className="btn pink lighten-1 z-depth-0">Create Project</button>  
                    </div>   
                </form>                
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
})

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
};
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CreateProject);
