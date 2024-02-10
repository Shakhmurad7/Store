interface RootState {
  user: any[]; 
  JetSki: any[];
  Atv: any[];
}

interface DataAction {
  type: 'JetSki';
  payload: any[]; 
}

interface DataActions {
  type: 'Atv'; 
  payload: any[]; 
}

type ActionTypes = DataAction | DataActions; 

const RootRedux = (state: RootState = { user: [], JetSki: [], Atv: [] }, action: ActionTypes): RootState => {
  if (action.type === 'JetSki') {
      return { ...state, JetSki: action.payload };
  } else if (action.type === 'Atv') {
      return { ...state, Atv: action.payload };
  }

  return state;
};

export default RootRedux;
