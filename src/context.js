import React, { Component } from 'react'

const UserContext = React.createContext();

//Provide, consumer (sağlayıcıi tüketici)
const reducer = (state,action) => { 
    switch(action.type) {
        case "DELETE_USER":
            return {
                ...state, //statei ayırıyoruz operatörle
                users: state.users.filter(user => action.payload !== user.id)
            }
        case "ADD_USER" :
            return { 
                ...state,
                users: [...state.users,action.payload]
            }
        default:
            return state //uygulammızda ubulunmamız bi type gönderilirse eski state i dönüyor
    }
}


export class UserProvider extends Component {

    state = {
        users : [ 
          {
            id:"unique-1",
            name : "Mert TOSUN",
            salary : "5000",
            department : "Bilişim"
          },
          {
            id:"unique-2",
            name : "Aslı Eda İNANÇ",
            salary : "5000",
            department : "Tasarım"
          },
          {
            id:"unique-3",
            name : "Semra TOSUN",
            salary : "5000",
            department : "Donanım"
          },
          {
            id:"unique-4",
            name : "Mehmet TOSUN",
            salary : "5000",
            department : "Üretim"
          }
    
           
        ],
        dispatch : action => { 
            this.setState(state => reducer (state,action))
        }
      }

    render() {
        return (
            <UserContext.Provider value = {this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;

/* 
... operatörünün ne yaptıgı

state = { 
    a:10,
    b:20,      -->burası eski stateimiz
    c:30 
}

{ 
    b:20,      
    c:30,      -->yeni stateimiz
    a:20 
}

*/