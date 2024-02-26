interface RootState {
  JetSki: any[];
  Atv: any[];
  Boats: number[] | string[]
  BigBoats: number[] | string[]
  AllTerrainVehicles:number[] | string[]
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
interface DataAllTerrainVehicles {
  type: 'AllTerrainVehicles'; 
  payload:any[]; 
}
interface DataBigBoats {
  type: 'BigBoats'; 
  payload:any[]; 
}

type ActionTypes = DataAction | DataActions | DataBoats | DataBigBoats | DataAllTerrainVehicles;  

const RootRedux = (state: RootState = {JetSki: [], Atv: [] , Boats:[] , BigBoats:[] , AllTerrainVehicles:[] }, action: ActionTypes): RootState => {
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
  else if(action.type ==='AllTerrainVehicles' ){
    return { ...state, AllTerrainVehicles: action.payload };
  }

  return state;
};

export default RootRedux;
