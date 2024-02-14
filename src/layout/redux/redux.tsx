interface RootState {
  JetSki: any[];
  Atv: any[];
  Boats: number[] | string[]
}

interface DataAction {
  type: 'JetSki';
  payload: any[]; 
}

interface DataActions {
  type: 'Atv'; 
  payload:any[]; 
}
interface DataBigBoats {
  type: 'Boats'; 
  payload:any[]; 
}

type ActionTypes = DataAction | DataActions | DataBigBoats; 

const RootRedux = (state: RootState = {JetSki: [], Atv: [] , Boats:[] }, action: ActionTypes): RootState => {
  if (action.type === 'JetSki') {
      return { ...state, JetSki: action.payload };
  } else if (action.type === 'Atv') {
      return { ...state, Atv: action.payload };
  }
  else if(action.type ==='Boats' ){
    return { ...state, Boats: action.payload };
  }

  return state;
};

export default RootRedux;
