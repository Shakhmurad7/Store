interface RootState {
  JetSki: any[];
  Atv: any[];
  Boats: number[] | string[]
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
interface DataBoats {
  type: 'Boats'; 
  payload:any[]; 
}
interface DataBigBoats {
  type: 'BigBoats'; 
  payload:any[]; 
}

type ActionTypes = DataAction | DataActions | DataBoats | DataBigBoats;  

const RootRedux = (state: RootState = {JetSki: [], Atv: [] , Boats:[] , BigBoats:[] }, action: ActionTypes): RootState => {
  if (action.type === 'JetSki') {
      return { ...state, JetSki: action.payload };
  } else if (action.type === 'Atv') {
      return { ...state, Atv: action.payload };
  }
  else if(action.type ==='Boats' ){
    return { ...state, Boats: action.payload };
  }
  else if(action.type ==='BigBoats' ){
    return { ...state, BigBoats: action.payload };
  }

  return state;
};

export default RootRedux;
