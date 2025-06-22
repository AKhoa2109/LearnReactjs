import React, { useState } from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'
// stateless
// class DisplayInfor extends React.Component {

//     render(){
//         console.log('render');
//         // destructuring array/object
//         const {listUsers}  = this.props; 
//         // console.log(listUsers);
//         return(
//             <div className="display-infor-container">
//                 {true && 
//                     <div>
//                         {listUsers.map((user)=>{
//                             return (
//                                 <div key={user.id} className={+user.age>18 ? "green" : "red"}>
//                                     <div>
//                                         <div>My name is {user.name}</div>
//                                         <div>My age is {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={()=>this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr/>
//                                 </div>
//                             );
                            
//                         })}
//                     </div>
//                 }
//             </div>
//         );
//     }
// }

const DisplayInfor  = (props) =>{
    const {listUsers}  = props; 

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    return(
        <div className="display-infor-container">
            <div>
                <span onClick={()=> handleShowHideListUser()}>{isShowHideListUser ? "Hide list user" : "Show list user"}</span>
            </div>
            {isShowHideListUser && 
                <div>
                    {listUsers.map((user)=>{
                        return (
                            <div key={user.id} className={+user.age>18 ? "green" : "red"}>
                                <div>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={()=>props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr/>
                            </div>
                        );
                        
                    })}
                </div>
            }
        </div>
    );
}

export default DisplayInfor;