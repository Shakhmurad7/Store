interface RootState {
  JetSki: any[];
  Atv: any[];
  Boats: number[] | string[]
  BigBoats: number[] | string[]
  AllTerrainVehicles:number[] | string[]
  Snowmobiles:number[] | string[]
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
interface DataSnowmobiles {
  type: 'Snowmobiles'; 
  payload:any[]; 
}

type ActionTypes = DataAction | DataActions | DataBoats | DataBigBoats | DataAllTerrainVehicles |DataSnowmobiles;  

const RootRedux = (state: RootState = {JetSki: [], Atv: [] , Boats:[] , BigBoats:[] , AllTerrainVehicles:[] , Snowmobiles:[] }, action: ActionTypes): RootState => {
  // if (action.type === 'JetSki') {
  //     return { ...state, JetSki: action.payload };
  // } else if (action.type === 'Atv') {
  //     return { ...state, Atv: action.payload };
  // }
  // else if(action.type ==='Boats' ){
  //   return { ...state, Boats: action.payload };
  // }
  // else if(action.type ==='BigBoats' ){
  //   return { ...state, BigBoats: action.payload };
  // }
  // else if(action.type ==='AllTerrainVehicles' ){
  //   return { ...state, AllTerrainVehicles: action.payload };
  // }
  // else if(action.type ==='Snowmobiles' ){
  //   return { ...state, Snowmobiles: action.payload };
  // }
  switch (action.type) {
    case 'JetSki' :
      return { ...state, JetSki: action.payload };
    case 'Atv' :
      return { ...state, Atv: action.payload };
    case 'Boats' :
      return { ...state, Boats: action.payload };
    case 'BigBoats' :
      return { ...state, BigBoats: action.payload };
    case 'AllTerrainVehicles' :
      return { ...state, AllTerrainVehicles: action.payload };
    case 'Snowmobiles' :
      return { ...state, Snowmobiles: action.payload };
    }

    return state;
};

export default RootRedux;
