interface RootState {
  JetSki: any[];
  Atv: any[];
  BigBoats: number[] | string[]
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
  type: 'BigBoats'; 
  payload:any[]; 
}

type ActionTypes = DataAction | DataActions | DataBigBoats; 

const RootRedux = (state: RootState = {JetSki: [], Atv: [] , BigBoats:[] }, action: ActionTypes): RootState => {
  if (action.type === 'JetSki') {
      return { ...state, JetSki: action.payload };
  } else if (action.type === 'Atv') {
      return { ...state, Atv: action.payload };
  }
  else if(action.type ==='BigBoats' ){
    return { ...state, BigBoats: action.payload };
  }

  return state;
};

export default RootRedux;
