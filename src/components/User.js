import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from "../context";

class User extends Component {
    state = { 
        isVisible : false
    }
    static defaultProps = { 
    name : " Bilgi Yok",
    salary : "Bilgi Yok",
    department : "Bilgi Yok"
    
    }
    // onClickEvent(event){
    //     console.log(this);//bindlamadan önce undefined verir yani hiç bi yeri göstermez
    // } //ya aşağıdaki constructor yapısında bind ederiz, ya onClick eventi verdiğimiz yerde bind ederiz ya da arrow function

    // constructor (props){
    //     super(props);
    //     this.onClickEvent = this.onClickEvent.bind(this);
    // }

    onClickEvent = (number,e) => { 

        this.setState({
            isVisible : !this.state.isVisible
        })
    }
    onDeleteUser = (dispatch,e) => {
        const {id} = this.props;
        //Consumerdan kullanıcagımız dispatch gelicek
        dispatch({type: "DELETE_USER", payload:id});
        
    }

    // constructor (props) { 
    //     super(props)
    //     this.state = {
    //         isVisible : false
    //     }
    // }
    render() {

        //Destructing
        const {name,department,salary} = this.props;
        const {isVisible} = this.state;

        return (
                <UserConsumer>
                    {
                        value => { 
                            const {dispatch} = value;
                        
                            return (
                                    <div className ="col-md-8 mb-4" >
                                        <div className ="card" style= {isVisible ? {backgroundColor: "#e6e6fa",color:"white"} : null}>
                                            <div className = "card-header d-flex justify-content-between">
                                                <h4 className = "d-inline" onClick = {this.onClickEvent.bind(this,34)}>{name}</h4>
                                                <i onClick = {this.onDeleteUser.bind(this,dispatch)} className="far fa-trash-alt" style = {{cursor: "pointer"}}></i>
                                            </div>
                                        {
                                            isVisible ?  <div className = "card-body">
                                            <p className = "card-text">Maaş: {salary}</p>
                                            <p className = "card-text">Departman: {department}</p>
                                            
                                        </div> : null
                                        }
                                        
                                    </div>
                                </div>
                                )

                        }
                    }
                </UserConsumer>
                
                )

        
    }
}

User.propTypes = { 
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
    
}
export default User;