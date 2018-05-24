
import * as actionTypes from './action';
const initialState = {
     persons:[ {id:1, name:"Test",age:11},],
}
const reducer = (state=initialState, action) =>{

        switch(action.type){
            case actionTypes.AddPerson :
                   const newPerson ={ id: Math.random() , name: action.name ,age:action.age }; 
                   return{
                       ...state,
                        persons : state.persons.concat(newPerson),
                   }
            default: 
                 return state;   
        }
}

export default reducer;