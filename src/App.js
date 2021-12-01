
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home'
import UserProfile from './components/UserProfile';
import LogIn from './components/Login'
// import './App.css'

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96'
      }
    }
  }
  //this function is called in the Login componenent and it updates the userName property of the state in this component with new username
  mockLogIn = (logInfo) => {
    const newUser = {...this.state.currentUser};
    newUser.userName = logInfo.userName;
    this.setState({currentUser: newUser})
  }

  render() { //render is called first time in the first instantiation of the component, then it is called again when the state updats if there is one
     
    // The component prop in Route won't accept a pre-built component, but React Router has provided an alternative render method/prop that will. 
    // So basically the render prop accepts a function variable that returns a pre-built componet.
    // All we have to do is save our component as a variable like below and pass it straight in as a prop(render).
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>); 
    const LogInComponent = () => ( <LogIn user={this.state.currentUser} mockLogin={this.mockLogIn} />);
    
    //so basically this render() renders the Home Component at URL "/"
    return (
      //initalize a router for this component
      <Router> 
        <div>
          <Route exact path="/" render= {HomeComponent}/>  {/* Creates a route with url "/" at which the Home component is mounted/displayed*/}
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
