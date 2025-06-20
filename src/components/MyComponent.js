// class component
// function component

import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfor from "./DisplayInfor";


class MyComponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name:'Anh Khoa',age:'16'},
            {id: 2, name:'Khoa',age:'21'},
            {id: 3, name:'Khoaaa',age:'69'},
        ]
    }

    handleAddNewUser = (userObj) => {
        // let {listUsers} = this.state;
        // console.log(listUsers);
        // listUsers.unshift(userObj);
        // this.setState({
        //     listUsers: listUsers
        // })

        this.setState({
            listUsers: [userObj,...this.state.listUsers]
        })
    }

    // JSX
    render(){
        return(
            <div> 
                <AddUserInfo handleAddNewUser={this.handleAddNewUser}/>
                <br></br>
                <DisplayInfor listUsers={this.state.listUsers}/>
            </div>
        );
    }
}

export default MyComponent;