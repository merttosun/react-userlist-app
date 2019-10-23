import React, {Component} from 'react';
import Navbar from './components/Navbar';
// import User from './components/user';
import './App.css';
import Users from  "./components/Users";
// import PropTypes from 'prop-types';
import AddUser from "./components/AddUser";
class App extends Component {
  


  render () {
    
    return (
      <div className="container"> 
        
        <Navbar title = "User App" />
        <hr/>
        <AddUser></AddUser>
        <Users/>
        
      </div>
    );
  }
    
  
}




export default App;
