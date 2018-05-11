
export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_PICS':
      return {
        ...action.info
      }
    case 'REMOVE_PICS':
      return state.filter( ({ id }) => 
        id !== action.idToRemove
      )
    case 'SET_PICS':
      return action.pics;
    default:
      return state;
  }
};