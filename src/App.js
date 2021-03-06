
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import UserProfile from './components/UserProfile';
import LogIn from './components/Login'
import axios from 'axios' //library for API requests 
import Debit from './components/Debit'
import Credit from './components/Credit'
// import './App.css'

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: '',
        memberSince: ''
      },
      debits: [],
      credits: []
    }
  }

  //Lifecycle method that is called when the component is rendered for the first time. API requests are made here to get initial debits and credits.
  async componentDidMount() {

    let debits = await axios.get("https://moj-api.herokuapp.com/debits") //makes a get request to this debits API endpoint 
    let credits = await axios.get("https://moj-api.herokuapp.com/credits") //makes a get request to this credits API endpoint

    //Get the data from the API response objects
    debits = debits.data //data is an array of objects that each represents a debit with properties "id", "description",  "amount", "date"
    credits = credits.data //data is an array of objects that each represents a credit properties "id", "description",  "amount", "date"
    
    //    Get the sum of the debits and the sum of the credits   //
    let debitSum = 0, creditSum = 0;
    //For each debit object in array debits, add the value of the amount property to DebitSum
    debits.forEach(( debit ) => {
      debitSum+= debit.amount 
    });
    //For each credit object in array credits, add the value of the amount property to CreditSum
    credits.forEach(( credit ) => {
      creditSum+= credit.amount
    });

    //Compute the account balance from the debit sum and credit sum
    let accountBalance = (creditSum - debitSum).toFixed(2); //toFixed(2) ensures we will only have 2 decimal digits with rounding

    //Update the state property accountBalance to the new calculated balance and debits and credits to the data from the API requests 
    this.setState({accountBalance, debits, credits});
  }
  

  //Helper function that returns the date in YYYY-MM-DD format for when user adds credit or debit
  getTodayDate = () => {
    let today = new Date(); //date object representing today's date
    let year = today.getFullYear().toString()
    let month = (today.getMonth() + 1).toString() //add 1 bc 0 represents first month and 11 last month
    if (month.length !== 2) { month = '0' + month }
    let day = today.getDate().toString()
    if(day.length !== 2) { day = '0' + day}
    let date = year + '-' + month + '-' + day; // YYYY-MM-DD format
    return (date); 
  }

  //this function is called in the Login componenent and it updates the userName property of the state in this component with new username
  mockLogIn = (logInfo) => {
    const newUser = {...this.state.currentUser};
    newUser.memberSince = this.getTodayDate()
    newUser.userName = logInfo.userName;
    this.setState({currentUser: newUser})
  }

  // The event is when the user clicks "Add Debit" button. 
  // The event object will contain the values of the Description input field and the Amount input field
  addDebit = (event) => {
    event.preventDefault(); //prevent default return behavior
    let amount = parseFloat(event.target.amount.value) //parseFloat() method converts a string into a point number
    let description = event.target.description.value
    let date = this.getTodayDate()  // Gets the current date in YYYY-MM-DD format

    // create new debit object to add
    let newDebit = {
      id: "",
      amount: amount,
      description: description,
      date: date
    }

    let debits = [...this.state.debits]; //create a copy of the debits array 
    debits.push(newDebit); //add the newDebit object to the end of the debits array
    let accountBalance = (this.state.accountBalance - amount).toFixed(2) //amount is the new debit amount that was specified in the Amount input field
    
    //Update the debits and accountBalance properties of the state with the new debit array and new balance
    this.setState({debits: debits, accountBalance: accountBalance})

  }

  addCredit = (event) => {
    event.preventDefault(); 
    let description = event.target.description.value
    let amount = parseFloat(event.target.amount.value)
    let date = this.getTodayDate() // Gets the current date in YYYY-MM-DD format

    // create new credit object to add
    let newCredit = {
      id: "",
      amount: amount,
      description: description,
      date: date
    }

    //get the new credits array and account balance after adding the new credit
    let credits = [...this.state.credits] //creates a new array with the state's credits array 
    credits.push(newCredit) //add new credit object to the credits array
    let accountBalance = (parseFloat(this.state.accountBalance) + newCredit.amount).toFixed(2) //new account balance

    //Update the state with new credits array and account balance
    this.setState({credits: credits, accountBalance: accountBalance})
  }

  render() { //render is called first time in the first instantiation of the component, then it is called again whenever the state updates
     
    // The component prop in Route won't accept a pre-built component, but React Router has provided an alternative render method/prop that will. 
    // So basically the render prop accepts a function variable that returns a pre-built componet.
    // All we have to do is save our component as a variable like below and pass it straight in as a prop(render).
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} accountBalance={this.state.accountBalance}/>); 
    const LogInComponent = () => ( <LogIn user={this.state.currentUser} mockLogin={this.mockLogIn} />);
    const DebitComponent = () => (<Debit addDebit = {this.addDebit} debits = {this.state.debits} accountBalance={this.state.accountBalance} />); 
    const CreditComponent = () => (<Credit addCredit={this.addCredit} credits={this.state.credits} accountBalance={this.state.accountBalance}/>);
  
    return (
      //initalize a router for this component
      <Router> 
          <Switch>
            <Route exact path="/Bank-of-React" render= {HomeComponent}/>  {/* Creates a route with url "/" at which the Home component is mounted/displayed*/}
            <Route exact path="/Bank-of-React/userProfile" render={UserProfileComponent}/>
            <Route exact path="/Bank-of-React/login" render={LogInComponent} />
            <Route exact path="/Bank-of-React/debits" render={DebitComponent} />
            <Route exact path="/Bank-of-React/credits" render={CreditComponent} />]
          </Switch>
      </Router>
    );
  }
}

export default App;
