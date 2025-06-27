import { useReducer, createContext, type Dispatch, type ReactNode } from "react"
import { BudgetReducer, initialState, type BudgeState, type BudgetActions } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgeState
    dispatch: Dispatch<BudgetActions>
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({ children }: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(BudgetReducer, initialState);

    return (
        <BudgetContext.Provider value={{ state, dispatch }}>
            {children}
        </BudgetContext.Provider>
    );
};