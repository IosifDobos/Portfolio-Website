import React, { Component } from 'react';
import '../../javascript/app.js';

class Contact extends Component {

  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  handleChange = (e) => {
    const {target} = e;
    
    this.setState( (state) => ({
        ...state,
        [target.id]: target.value
    }));
    console.log(this.state);
  } 

  handleSubmit = (e) => {
    console.log('function called');
    e.preventDefault();

    console.log(e);

    fetch('http://localhost:3000/send', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then( (response) => (response.json())
      
    ).then( (response) => {
      if(response.status === 'success'){
        alert('Message Sent Successfully');
        this.resetForm();
      }
      else if(response.status === 'fail') {
        alert('Message failed to send')
      }
    })
    .catch( (error) => {
      console.log('Error', error);
    });
  }

  resetForm() {
    this.setState={
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }

    render() {
      return (
          <div className="container about-container">
            {/* <figure>
              <div className="fixed-wrap">
                <div id="fixed"></div>
              </div>
            </figure> */}
            <div className="row jumbotron">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                    <h4 className="display-4">Hello, I'm Iosif Dobos</h4>
                    <p className="lead">
                        Click the button to view my cv for more information about me!
                    </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <a href="https://google.com"><button type="button" className="btn btn-outline-secondary btn-lg">View CV</button> </a>
                </div>
            </div>
            <div className="row jumbotron">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                    <h4 className="display-4">Also, I love to build THINGS!!!</h4>
                    <p className="lead">
                        Click the button to view my individual projects and the project I have built during college!
                    </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <a href="https://github.com/IosifDobos">
                      <button type="button" className="btn btn-outline-secondary btn-lg">View GitHub</button> 
                    </a>
                </div>
            </div>

            {/* Contact Form */}
            <div className="container-fluid padding">
              <div className="row welcome text-center">
                  <div className="col-12">
                      <h1 className="display-4">Contact us!</h1>
                  </div>
                  <hr></hr>
                  <div className="col-12">
                      <p className="text-center">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.
                      </p>
                  </div>
                </div>
                <div className="row padding">
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                        <form id="contact-form" name="contact-form" onSubmit={this.handleSubmit} method="POST">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control" onChange={this.handleChange} />
                                        <label htmlFor="name" className="">Your name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control" onChange={this.handleChange}/>
                                        <label htmlFor="email" className="">Your email</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                      <label htmlFor="subject" className="">Subject</label>
                                      <input type="text" id="subject" name="subject" className="form-control" onChange={this.handleChange} />
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" onChange={this.handleChange} ></textarea>
                                        <label htmlFor="message">Your message</label>
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div className="text-center text-md-left">
                            <button className="btn btn-primary" type="submit" onSubmit={this.handleSubmit}>Send</button>
                        </div>
                        <div className="status"></div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>San Francisco, CA 94126, USA</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 01 234 567 89</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>contact@mdbootstrap.com</p>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
          </div>
      );
    }
}
export default Contact;