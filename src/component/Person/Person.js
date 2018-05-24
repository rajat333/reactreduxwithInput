// Used for display of Person
import React, { Component } from 'react';
class Person extends Component{
    
    render(){
        return(
            <div className="Person">
             <h1>{ this.props.name }</h1>
             <p>{ this.props.age } </p>   
            </div>    
        );
    }
}

export default Person;