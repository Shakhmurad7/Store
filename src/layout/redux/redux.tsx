
interface RootState {
    user: any[]; // Replace 'any' with the actual type of your user data
    JetSki:any[]
  }
  
  interface DataAction {
    type: 'JetSki';
    payload: any[]; // Replace 'any' with the actual type of your payload
  }
  
  type ActionTypes = DataAction;
  
  const RootRedux = (state: RootState = { user: [] , JetSki:[]} ,  action: ActionTypes): RootState => {
    if (action.type === 'JetSki') {
      return { ...state, JetSki: action.payload };
    }
  
    return state;
  
  };
  
  export default RootRedux;
  


