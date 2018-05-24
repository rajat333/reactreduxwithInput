import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddPerson from '../component/AddPerson/AddPerson';
//For Displaying a Person
import Person from '../component/Person/Person';
import * as actionTypes from '../store/action';

class Persons extends Component{
   render(){
        return(
            <div className="Persons">
            <AddPerson personadded={ this.props.onAddPerson } />
            { this.props.prs.map( person=>(

             <Person key={person.id} 
                    name={person.name}
                    age={ person.age} />   
            )) }
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
   console.log("....state..person...",state.person);
   return{ 
       prs: state.persons,
    };   
}
const mapDispatchToProps = dispatch =>{
    return {
        // different func for performing actions
        onAddPerson:(name,age)=>  dispatch({ type: actionTypes.AddPerson, name:name, age:age }),
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(Persons);