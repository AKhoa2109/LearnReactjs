import React from "react";

class AddUserInfo extends React.Component {

      state = {
        name:'Khoa',
        address:'TPHCM',
        age: 21
    }

    handleClick(event) {
        // console.log('Hello worl d');
        console.log(this.state.name);
        let tuoi = Math.floor((Math.random())*100+1);
        console.log(tuoi);
        this.setState({
            name:'Anh Khoa',
            age: tuoi,
        })
    }

    handleOnMouseOver(event){
        console.log(event);
    }

    handleOnChangeInput = (event)=> {
        this.setState({
            name:event.target.value,
        })
    }

    handleOnChangeAge = (event)=> {
        this.setState({
            age:event.target.value,
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random()*100)+1)+'-random',
            name: this.state.name,
            age: this.state.age
        });
    }
    render(){
        return(
            <div>
                My name is {this.state.name} and I'm {this.state.age}

                {/* <button onClick={(event) => {this.handleClick(event)}}>Click me</button> */}

                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <label>Your name:</label>
                    <input value={this.state.name} type="text" onChange={(event)=>{this.handleOnChangeInput(event)}}/>
                    <label>Your age:</label>
                    <input value={this.state.age} type="text" onChange={(event)=>{this.handleOnChangeAge(event)}}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUserInfo;