
// function ReduxRoot(state = {user:[]} , action:any ) {
//     if(action.type === 'data'){
//         return {...state , user: action.payload}
//     }
//     return state
// }

// export default ReduxRoot

interface RootState {
    user: any[]; // Replace 'any' with the actual type of your user data
  }
  
  interface DataAction {
    type: 'data';
    payload: any[]; // Replace 'any' with the actual type of your payload
  }
  
  type ActionTypes = DataAction;
  
  const rootReducer = (state: RootState = { user: [] }, action: ActionTypes): RootState => {
    if (action.type === 'data') {
      return { ...state, user: action.payload };
    }    
    return state;
  };
  
  export default rootReducer;
  


