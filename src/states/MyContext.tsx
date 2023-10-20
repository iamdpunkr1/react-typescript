import React, { createContext, useReducer } from "react";

type ChildProps = {
    children: React.ReactNode
}

type StateType = {
    count: number
}

type ActionType = {
    type: string
}

type ReducerProps = {
    state: StateType,
    dispatch: React.Dispatch<ActionType> 
}

const reducerFn = (state: StateType, action: ActionType) => {

    switch(action.type){
        case "INC": return {count: state.count+1}
        case "DEC": return {count: state.count-1}
        case "RESET": return {count:0}
        default: return state
    }
}

export const MyContext = createContext({} as ReducerProps)

export const MyContextProvider = ({children}: ChildProps) => {
    
    const [state, dispatch] = useReducer(reducerFn, {count:0})

    return (
        <MyContext.Provider value={{state, dispatch}}>
            {children}
        </MyContext.Provider>
    )
}
