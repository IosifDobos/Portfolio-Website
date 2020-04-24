import React, {Component} from 'react';

import profileImg from '../../assets/img/github_image.png';

class Profile extends Component{
    render() {
        return (
            <div className="profile-page">
                <div className="page-header header-filter" data-parallax="true"></div>
                <div className="main main-raised">
                    <div className="profile-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 ml-auto mr-auto">
                                <div className="profile">
                                        <div className="avatar">
                                            <img src={profileImg} alt="Circle Profile" className="img-raised rounded-circle img-fluid" />
                                        </div>
                                        <div className="name">
                                            <h1 className="title">Iosif Dobos</h1>
                                            <h5>Software Developer</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid padding">
                                <div className="row text-center padding">
                                    <div className="col-12">
                                        <h3>Find more about me on social media</h3>
                                    </div>
                                        <div className="col-12 social padding">
                                            
                                            <a href="https://www.facebook.com/josephberelly" target="_blank" rel="noopener noreferrer" type="button">
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                            <a href="https://twitter.com/josephberelly" target="_blank" rel="noopener noreferrer" type="button">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="https://www.instagram.com/joseph_berelly/" target="_blank" rel="noopener noreferrer" type="button">
                                                <i className="fab fa-instagram"> </i> 
                                            </a>
                                            <a href="https://www.linkedin.com/in/iosif-dobos/" target="_blank" rel="noopener noreferrer" type="button">
                                                <i className="fab fa-linkedin-in"> </i>
                                            </a>
                                            <a href="https://github.com/IosifDobos" target="_blank" rel="noopener noreferrer" type="button">
                                                <i className="fab fa-github"> </i>
                                            </a>
                                            <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" type="button" >
                                                <i className="fab fa-medium"> </i>
                                            </a>
                                            
                                        </div>
                                </div>
                            </div>
                            <div className="description text-center">
                                <p>An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>
                            </div>
                            <div className="row">
                                <div className="col-md-6 ml-auto mr-auto">
                                    <div className="profile-tabs">
                                    <ul className="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#studio" role="tab" data-toggle="tab">
                                                <i className="material-icons">camera</i>
                                                Studio
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#works" role="tab" data-toggle="tab">
                                                <i className="material-icons">palette</i>
                                                    Work
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#favorite" role="tab" data-toggle="tab">
                                                <i className="material-icons">favorite</i>
                                                    Favorite
                                            </a>
                                        </li>
                                    </ul>
                                    </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Profile;