
interface RootState {
  JetSki: any[];
  Atv: any[];
  Boats: number[] | string[];
  BigBoats: number[] | string[];
  AllTerrainVehicles: number[] | string[];
  Snowmobiles: number[] | string[];
  Engines: number[] | string[];
}

interface DataAction {
  type: 'JetSki';
  payload: any[]; 
}

interface DataActions {
  type: 'Atv'; 
  payload: any[]; 
}

interface DataBoats {
  type: 'Boats'; 
  payload: any[]; 
}

interface DataAllTerrainVehicles {
  type: 'AllTerrainVehicles'; 
  payload: any[]; 
}

interface DataBigBoats {
  type: 'BigBoats'; 
  payload: any[]; 
}

interface DataSnowmobiles {
  type: 'Snowmobiles'; 
  payload: any[]; 
}

interface DataEngines {
  type: 'Engines'; 
  payload: any[]; 
}
interface selectCategorys {
  type: 'SELECT_CATEGORY'; 
  payload: any[]; 
}

export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const selectCategory = (category: string) => ({
  type: SELECT_CATEGORY,
  payload: category,
});

type ActionTypes =  selectCategorys | DataAction | DataActions | DataBoats | DataBigBoats | DataAllTerrainVehicles | DataSnowmobiles  | DataEngines;

const RootRedux = (state: RootState = {JetSki: [], Atv: [] , Boats:[] , BigBoats:[] , AllTerrainVehicles:[] , Snowmobiles:[]  , Engines:[] }, action: ActionTypes): RootState => {
  switch (action.type) {
    case 'JetSki':
      return { ...state, JetSki: action.payload };
    case 'Atv':
      return { ...state, Atv: action.payload };
    case 'Boats':
      return { ...state, Boats: action.payload };
    case 'BigBoats':
      return { ...state, BigBoats: action.payload };
    case 'AllTerrainVehicles':
      return { ...state, AllTerrainVehicles: action.payload };
    case 'Snowmobiles':
      return { ...state, Snowmobiles: action.payload };
    case 'Engines':
      return { ...state, Engines: action.payload };
  }
  
  return state;
};

export default RootRedux;

