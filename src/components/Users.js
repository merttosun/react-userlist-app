import React, { Component } from 'react';
import User from "./User";

class Users extends Component {
    render() {
        const {users,deleteUser} = this.props;
        
        return (
            <div>
                {
                    users.map(user => {
                        return (
                            <User
                            key = {user.id}
                            id = {user.id}
                            name = { user.name } 
                            salary = { user.salary}
                            department = {user.department}
                            deleteUser = {deleteUser}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
export default Users;