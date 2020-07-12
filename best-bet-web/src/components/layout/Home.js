// import React, {Component} from 'react';
// // import {Redirect} from 'react-router-dom';
// import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';

// import { firestoreConnect } from 'react-redux-firebase';
// import Notifications from '../dashboard/Notifications';
// import ProjectList from '../projects/ProjectList';
// import profileImg from '../../assets/img/github_image.png';

// class Home extends Component {
    
//     render() {

//         // const {auth} = this.props;

//         // if(!auth.uid){
//         //     return <Redirect to="/signin" />
//         // }

//         console.log(this.props);
//         const {posts} = this.props;
//         const postsList = posts.length ? (
//             posts.map(post => {
//                 return (
//                     <div className="post card" key={post.id}>
//                         <div className="card-content">
//                             <Link to={'/posts/' + post.id}>
//                                 <span className="card-title">{post.title}</span>
//                             </Link>
//                             <p>{post.body}</p>
//                         </div>
//                     </div>
//                 )
//             })
//         ) : (
//             <div className="center">No posts available</div>
//         )
//         return (
//             <div className="dashboard container constainer-css">
//                 <div className="row">
//                     <div className="col s3 profile-section">
//                         {/* <div> */}
//                             {/* <div> */}
//                             <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
//                             <aside id="colorlib-aside" className="border js-fullheight">
//                                 <div className="center">
//                                     <div className="author-img">
//                                         <img className="avatar profile-image" src={profileImg} alt="Profile"/>
//                                         <h1 id="colorlib-logo" className='name-header'>Iosif Dobos</h1>
//                                         <span className="email"><i className="material-icons left">email</i>josephberellyy22@gmail.com</span>
//                                     </div>
//                                 </div>
//                                 {/* <nav id="colorlib-main-menu" role="navigation" className="navbar">
//                                     <div id="navbar" className="collapse">
//                                         <ul>
//                                         <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
//                                         <li><a href="#about" data-nav-section="about">About</a></li>
//                                         <li><a href="#" data-nav-section="projects">Projects</a></li>
//                                         <li><a href="#" data-nav-section="blog">Blog</a></li>
//                                         <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
//                                         </ul>
//                                     </div>
//                                 </nav> */}
//                                 <div id="colorlib-main-menu" className="center">
//                                     <ul>
//                                         <li><a href="https://www.facebook.com/dhruv.barochia" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" />Facebook</a></li>
//                                         <li><a href="https://twitter.com/ddbarochiya" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" />Twitter</a></li>
//                                         <li><a href="https://www.instagram.com/ddbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" />Instagram</a></li>
//                                         <li><a href="https://www.linkedin.com/in/iosif-dobos/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" />Linked-in</a></li>
//                                         <li><a href="https://github.com/IosifDobos" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i>GitHub</a></li>
//                                         <li><a href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i>Medium</a></li>
//                                     </ul>
//                                 </div>
//                                 <div className="colorlib-footer center">
//                                     <p><small>
//                                         Made with <i className="material-icons align-icon" aria-hidden="true">favorite</i> and <i className="material-icons" aria-hidden="true">local_cafe</i><br></br>
//                                         Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
//                                     </small></p>
//                                     <p><small>
//                                         Something coming soon !!
//                                     </small></p>
//                                 </div>
//                             </aside>
//                             {/* </div> */}
//                         {/* </div> */}
//                         <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
//                     </div>
//                     <div className="col s9 content-section">
//                     <h4>Projects </h4>
//                     <hr></hr>
//                     {/* <div className="dashboard container"> */}
//                         {/* <div className="row">
//                             <div className="col s12 m6">
//                                 <ProjectList projects={projects} />
//                             </div>
//                             <div className="col s12 m5 offset-m1">
//                                 <Notifications notifications={notifications}/>
//                             </div>
//                         </div> */}
//                     {/* </div> */}
//                         <div>
//                             <h4 className="post-header">Curently Posted</h4>
//                             <hr></hr>
//                             {postsList}
//                         </div>
                        
//                     </div>
//                 </div>
                
//             </div>
//         );
//     }
    
// }

// const mapStateToProps = (state) => {
//     return {
//         posts: state.post.posts,
//         auth: state.firebase.auth,
//         projects: state.firestore.ordered.projects,
//         notifications: state.firestore.ordered.notifications,
//     }
// }

// export default connect(
//     mapStateToProps,
//     firestoreConnect([
//         { collection: 'projects', orderBy: ['createdAt', 'desc'] },
//         { collection: 'notifications', limit: 4, orderBy: ['time', 'desc']},
//     ])
// )(Home);