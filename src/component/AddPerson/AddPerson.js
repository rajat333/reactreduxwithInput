import React, { Component } from 'react';
import './AddPerson.css';

class AddPerson extends Component{
    constructor(){
        super();
        this.state = {
            name:'',
            age:''
        }
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.ageChangeHandler = this.ageChangeHandler.bind(this); 
    }
    
    nameChangeHandler(event){
        // console.log("...event...",event.target);
        this.setState({ name: event.target.value });
    }
    ageChangeHandler(event){
        this.setState({ age: event.target.value });
    }
    onHandleSubmit(){
        console.log("....onhandlesubmit");
        const name = this.state.name;
        const age = this.state.name;
        this.props.personadded(name,age);
        this.setState({ 
             name:'',
             age:''
        })        
    }
 
    render(){
        return(
            <div className="AddPerson">
               <input type="text"  name="name" value={this.state.name} onChange={ this.nameChangeHandler }  />
                &nbsp;  &nbsp;  &nbsp;
               <input type="number" name="age" value={this.state.age} onChange={ this.ageChangeHandler } />
               <input type="submit" value="Submit" onClick={ ()=> this.onHandleSubmit() } />
                
            </div>
        );
    }

}

export default AddPerson;