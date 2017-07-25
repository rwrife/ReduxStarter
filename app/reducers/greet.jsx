
export default function setGreeting(state = { name: '' }, action) {  
  switch (action.type) {
    case 'GREET':
      return { name: action.payload.name };
    default:
      return state;
  }
};