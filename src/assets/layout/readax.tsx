
function ReduxRoot(state = {user:[]} , action:any ) {
    if(action.type === 'data'){
        return {...state , user: action.payload}
    }
    return state
}

export default ReduxRoot


