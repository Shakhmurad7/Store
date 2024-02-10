interface RootState {
  JetSki: string[] | number[];
  Atv: string[] | number[];
}

interface DataAction {
  type: 'JetSki';
  payload: string[] | number[]; 
}

interface DataActions {
  type: 'Atv'; 
  payload: string[] | number[]; 
}

type ActionTypes = DataAction | DataActions; 

const RootRedux = (state: RootState = {JetSki: [], Atv: [] }, action: ActionTypes): RootState => {
  if (action.type === 'JetSki') {
      return { ...state, JetSki: action.payload };
  } else if (action.type === 'Atv') {
      return { ...state, Atv: action.payload };
  }

  return state;
};

export default RootRedux;
