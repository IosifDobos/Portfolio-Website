import React, { Component } from 'react';
import '../../javascript/app.js';

class Contact extends Component {
    // setTimeout( () => {
    //     props.history.push('/about');
    // }, 2000);
  constructor(props){
      super(props);
      this.state = {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  // onNameChange(event){
  //   this.setState({name: event.target.value});
  // }

  // onEmailChange(event){
  //   this.setState({email: event.target.value});
  // }

  // onSubjectChange(event){
  //   this.setState({subject: event.target.value});
  // }

  // onNameChange(event){
  //   this.setState({message: event.target.value});
  // }

  handleChange = (e) => {
    console.log(e);
    const {target} = e;
    
    this.setState( state => ({
        ...state,
        [target.id]: target.value
    }));
  } 

  handleSubmit = (event) => {
    alert('function called');
    event.preventDefault();

    console.log(this.state);

    fetch('http://localhost:3000/contact', {
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

  // resetForm(){
  //   this.setState({name: ‘’, email: ‘’, message: ‘’})
  // }

    render() {
      return (
          <div className="container about-container">
            <figure>
              <div className="fixed-wrap">
                <div id="fixed"></div>
              </div>
            </figure>
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
          </div>
      );
    }
}
export default Contact;