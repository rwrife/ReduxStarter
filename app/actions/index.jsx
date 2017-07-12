export const GREET = "GREET";

export const greet = (text) => {
  return {
    type: GREET,  
    payload: {
        name:text
    }  
  }
}