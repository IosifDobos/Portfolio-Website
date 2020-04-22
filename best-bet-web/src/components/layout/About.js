import React, { Component } from 'react';

import backgroundImg from '../../assets/img/background.png';
import backgroundImg2 from '../../assets/img/background2.png';
import backgroundImg3 from '../../assets/img/background3.png';

class About extends Component {
    render() {
        return (
            <div className="container about-container">
                {/* Image Slides */}
                <div id="slides" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#slides" data-slide-to="0" className="active"></li>
                        <li data-target="#slides" data-slide-to="1"></li>
                        <li data-target="#slides" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={backgroundImg} alt="Background 1" />
                            <div className="carousel-caption">
                                <h1 className="display-2">Projects</h1>
                                <h3>Complete Website Project</h3>
                                <button type="button" className="btn btn-outline-light btn-lg">View Demo</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={backgroundImg2} alt="Background 2" />
                        </div>
                        <div className="carousel-item">
                            <img src={backgroundImg3} alt="Background 3"/>
                        </div>
                    </div>
                </div>
                {/* Image Jumbotrom */}
                <div className="row jumbotron">
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                        <p className="lead">
                            A web hosting service that allows individuals to make their website accessible via the the WWW.
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <a href="https://google.com"><button type="button" className="btn btn-outline-secondary btn-lg">Web Hosting</button> </a>
                    </div>
                </div>
                <div className="container-fluid padding">
                    <div className="row welcome text-center">
                        <div className="col-12">
                            <h1 className="display-4">Who Am I?</h1>
                        </div>
                        <hr></hr>
                        <div className="col-12">
                            <p>I'm a 4th year computer science student at Technology University Dublin with ICT as my major.I love exploring new technologies and often amazed by the progress we as a human species have mad so far in the recent years.</p>
                            <p>This website is developed as part as one of the final year module assignment. The application was developed using ReactJS.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="container-fluid padding">
                    <div className="row welcome text-center">
                        <div className="col-12">
                            <h1 className="display-4">What I do?</h1>
                            <h4 className="display-4">Here are some of my expertise</h4>
                        </div>
                        <hr></hr>
                    </div>
                </div>
                <div className="container-fluid padding">
                    <div className="row text-center padding">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <i className="fas fa-code"></i>
                            <h3>Web Development</h3>
                            <p>I have experience building websites using JavaScript, Angular, React, HTML, CSS</p>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <i className="fas fa-bold"></i>
                            <h3>Algorithms & Data Structures</h3>
                            <p>As part of the Computer Science degree, I have good background over fundamental concepts of DSA</p>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <i className="fab fa-css3"></i>
                            <h3>Dev Ops</h3>
                            <p>I have pursued by internship at Revenue, being involved in a DevOps team working with tools like Jenkins and Doker</p>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
    
}
export default About;