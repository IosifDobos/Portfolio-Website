import React, { Component } from 'react';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import PostList from '../posts/PostList';
import profileImg from '../../assets/img/github_image.png';

class Dashboard extends Component {
    render() {
        
        const {posts, projects, notifications, auth} = this.props;
        console.log(auth);
        // const postsList = posts.length ? (
        //     posts.map(post => {
        //         return (
        //             <div className="media" key={post.id}>
        //                 <img className="d-flex align-self-start mr-3" src="https://mdbootstrap.com/img/Photos/Others/placeholder6.jpg" alt="Generic Bootstrap" />
        //                 <div className="media-body">
        //                     <Link to={'/posts/' + post.id}>
        //                          <h5 className="card-title">{post.title}</h5>
        //                      </Link>
        //                      <p>{post.body}</p>
        //                     <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus
        //                         et magnis dis parturient montes, nascetur ridiculus mus.
        //                     </p>
        //                 </div>
        //             </div>
        //         );
        //     })
        // ) : (
        //     <div className="center">No posts available</div>
        // );

        if(!auth.uid){
            return <Redirect to="/signin" />
        }

        return (
            <div className="dashboard container constainer-css">
                <div className="row">
                    <div className="col-sm-3 col-md-3 col-lg-3 profile-section">
                        {/* <div> */}
                            {/* <div> */}
                            {/* User Profile Section */}
                            <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                            <aside id="colorlib-aside" className="border js-fullheight">
                                <div className="center">
                                    <div className="author-img">
                                        <img className="avatar profile-image" src={profileImg} alt="User Profile" />
                                        <h1 id="colorlib-logo" className='name-header'>Iosif Dobos</h1>
                                        <span className="email"><i className="material-icons left">email</i>josephberellyy22@gmail.com</span>
                                    </div>
                                </div>
                                <div id="colorlib-main-menu" className="text-center mx-auto my-4 social-media">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/josephberelly" target="_blank" type="button" className="btn-floating btn-fb" rel="noopener noreferrer">
                                                <i className="fab fa-facebook-f"> </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/josephberelly" target="_blank" type="button" className="btn-floating btn-tw" rel="noopener noreferrer">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/joseph_berelly/" target="_blank" type="button" className="btn-floating btn-insta" rel="noopener noreferrer">
                                                <i className="fab fa-instagram"> </i> 
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/iosif-dobos/" target="_blank" type="button" className="btn-floating btn-linke-in" rel="noopener noreferrer">
                                                <i className="fab fa-linkedin-in"> </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/IosifDobos" target="_blank" type="button" className="btn-floating btn-github" rel="noopener noreferrer">
                                            <i className="fab fa-github"> </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://medium.com/" target="_blank" type="button" className="btn-floating btn-medium" rel="noopener noreferrer">
                                            <i className="fab fa-medium"> </i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="colorlib-footer center">
                                    <p><small>
                                        Made with <i className="material-icons align-icon" aria-hidden="true">favorite</i> and <i className="material-icons" aria-hidden="true">local_cafe</i><br></br>
                                        Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
                                    </small></p>
                                    <p><small>
                                        More details coming soon !!
                                    </small></p>
                                </div>
                            </aside>
                            {/* </div> */}
                        {/* </div> */}
                        <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                    </div>
                    <div className="col-sm-9 col-md-9 col-lg-9 content-section">
                    <h4 className="project-title font-weight-bold">Projects </h4>
                    <hr></hr>
                    {/* <div className="dashboard container"> */}
                        <div className="row">
                            <div className="col-sm-7 col-md-7 col-lg-7">
                                <ProjectList projects={projects} />
                            </div>
                            <div className="col-sm-5 col-md-5 col-lg-5">
                                <Notifications notifications={notifications}/>
                            </div>
                        </div>
                    {/* </div> */}
                        <div>
                            <h4 className="post-header font-weight-bold">Curently Posted</h4>
                            <hr></hr>
                            <PostList posts={posts} />
                        </div>
                        
                    </div>
                </div>
                
            </div>
            // <div className="dashboard container">
            //     <div className="row">
            //         <div className="col s12 m6">
            //             <ProjectList projects={projects} />
            //         </div>
            //         <div className="col s12 m5 offset-m1">
            //             <Notifications notifications={notifications}/>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        posts: state.post.posts,
        projects: state.firestore.ordered.projects, // || state.project.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 4, orderBy: ['time', 'desc']},
        { collection: 'posts', limit: 5, orderBy: ['time', 'desc']},
    ])
)(Dashboard);