import React,{createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//initial state 
const initialState = {
    transactions: [
        {id: 1, text: 'Market', amount: -40},
        {id: 2, text: 'Stock', amount: 20},
        {id: 3, text: 'Pictures', amount: 40},
    ]
}

// create context 
export const GlobalContext = createContext(initialState);

// Provider component 
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);

    return (
        <>
        <GlobalContext.Provider value={{
            transactions: state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
        </>
    )
}