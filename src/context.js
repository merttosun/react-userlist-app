import React, { Component } from 'react'
import axios from 'axios';

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
        case "UPDATE_USER":
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? action.payload : user)
                //map fonksiyonu bir array dönüyor , biz burda aslında objeler birleşerek bir array olusturuyuo usersımız o oluyo.
                //herbir userın üzerinde geziniyoruz userın id'si o anki güncellenmiş userin id'sine eşitse
                //güncellenmiş objemizi koymamız gerekiyo bu durumda action.payloadla değiştiriyo, idsi eşit değilse değişiklik yapmıyo
            }
        default:
            return state //uygulammızda ubulunmamız bi type gönderilirse eski state i dönüyor
    }
}


export class UserProvider extends Component {

    state = {
        users: [],
        dispatch : action => { 
            this.setState(state => reducer (state,action))
        }
      }
    componentDidMount = async () => {
       const response = await axios.get("http://localhost:3004/users");
    //    console.log(response);
        this.setState({
            users : response.data
        })
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