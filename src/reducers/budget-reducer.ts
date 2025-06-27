

//Definir la accion 
export type BudgetActions =
    { type: 'add-budget', payload: { budget: number } } |
    { type: 'show-modal' } |
    { type: 'close-modal' } 

//Dale un tipo de valor
export type BudgeState = {
    budget: number
    modal: boolean
}
//Inicia en 0
export const initialState : BudgeState ={
    budget: 0,
    modal: false
}
//Inicia en 0, agrega la funcion ('add-budget') y la actualiza, sino return to state
export const BudgetReducer = (
    state: BudgeState = initialState,
    action: BudgetActions
) => {
    if(action.type === 'add-budget'){       
        return{
            ...state,
            budget: action.payload.budget
        }
    }

    if(action.type === 'show-modal'){
        return{
            ...state,
            modal: true
        }
    }

    if(action.type === 'close-modal'){
        return{
            ...state,
            modal: false
        }
    }

    return state
}