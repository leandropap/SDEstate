'use client'
import { createContext, useState, useContext } from "react";
import { randArray } from "../helpers";
import { properties } from '../data.json'
const AppContext = createContext()

export function AppWrapper({ children }) {
    const [state, setState] = useState({
        cardsProperties: randArray,
        allProperties: properties
    })

    return (
        <AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}