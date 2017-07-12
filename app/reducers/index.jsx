import { combineReducers } from 'redux'; 
import setGreeting from './greet.jsx'

export default combineReducers({
    
    state: (state = {}) => state,
    greet: setGreeting 

});
