import React, {Component} from 'react';
import Navbar from './components/Navbar';
// import User from './components/user';
import './App.css';
import Users from  "./components/Users";
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    users : [ 
      {
        id:1,
        name : "Mert TOSUN",
        salary : "5000",
        department : "Bilişim"
      },
      {
        id:2,
        name : "Aslı Eda İNANÇ",
        salary : "5000",
        department : "Tasarım"
      },
      {
        id:3,
        name : "Semra TOSUN",
        salary : "5000",
        department : "Donanım"
      },
      {
        id:4,
        name : "Mehmet TOSUN",
        salary : "5000",
        department : "Üretim"
      }

       
    ]
  }

  deleteUser = (id) => {
    this.setState({
      users: this.state.users.filter(user => id !== user.id)
    })
  }

  render () {
    
    return (
      <div className="Container"> 
        
        <Navbar title = "User App" />
        <hr/>
        <Users users = {this.state.users} deleteUser = {this.deleteUser}/>
        
      </div>
    );
  }
    
  
}

Users.propTypes = { 
  users: PropTypes.array.isRequired,
  deleteUser : PropTypes.func.isRequired
}


export default App;
