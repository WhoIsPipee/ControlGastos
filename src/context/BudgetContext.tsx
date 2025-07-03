import { useMemo, useReducer, createContext, type Dispatch, type ReactNode } from "react"
import { BudgetReducer, initialState, type BudgeState, type BudgetActions } from "../reducers/budget-reducer"


type BudgetContextProps = {
    state: BudgeState
    dispatch: Dispatch<BudgetActions>
    totalExpenses: number
    remainingBudget: number
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({ children }: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(BudgetReducer, initialState);

    const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])
    const remainingBudget = state.budget - totalExpenses

    return (
        <BudgetContext.Provider value={{ state, dispatch, totalExpenses, remainingBudget }}>
            {children}
        </BudgetContext.Provider>
    );
};