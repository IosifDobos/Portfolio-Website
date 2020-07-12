import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import Home from './components/layout/Home';
import About from './components/layout/About';
import Contact from './components/layout/Contact';
import NavigationBar from './components/layout/NavigationBar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import CreatePost from './components/posts/CreatePost';
import PageFooter from './components/layout/PageFooter';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import PostDetails from './components/posts/PostDetails';
import Profile from './components/layout/Profile';

class App extends Component {

  render() {

    const { auth } = this.props;

    if(auth.isLoaded){
      return (
        <BrowserRouter>
          <div className="App">
            <NavigationBar />
              <Switch>
                <Route exact path='/' component={Dashboard} />
                {/* <Route path='/dashboard' component={Dashboard} /> */}
                <Route path='/project/:id' component={ProjectDetails} />
                <Route path='/post/:id' component={PostDetails} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
                <Route path='/profile' component={Profile} />
                <Route path='/create-project' component={CreateProject} />
                <Route path='/create-post' component={CreatePost} />
                {/* <Route path='/:any' component={Dashboard} /> */}
              </Switch>
            <PageFooter />
          </div>
        </BrowserRouter>
      );
    }// end if statement

    return null;
  }  
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});
export default compose(
  firebaseConnect(),
  connect(mapStateToProps),
)(App);
