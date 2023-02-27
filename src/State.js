
export const STATE_ACTIONS={
    INCREASE_STEP:'INCREASE',
    DECREASE_STEP:'DECREASE'

}
export const initailState={
    step:1
}
export function reducer(state, action){
    switch(action.type){
        case STATE_ACTIONS.INCREASE_STEP:{
                console.log(action.payload)
                return {...state, step:state.step+ action.payload }
          
        }
        case STATE_ACTIONS.DECREASE_STEP:{
            return {...state , step:state.step- action.payload}
        }
        default: { 
            return state; 
          } 
    }
}
