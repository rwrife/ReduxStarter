
export default function setGreeting(state = {}, action) {  
  switch (action.type) {
    case 'GREET':
      return { name:action.payload.name };
    default:
      return state;
  }
};