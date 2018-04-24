export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_PIC':
      return [
        state,
        ...action.pics
      ]
    case 'REMOVE_PIC':
      return state.filter(({ id }) => id !== action.id);
    case 'SET_PICS':
      return action.pics;
    default:
      return state;
  }
};