'use client'
import { createContext, useState, useContext } from "react";
import json from '../data.json'
const AppContext = createContext()

export function AppWrapper({ children }) {
    const [state, setState] = useState({
        allListings: json.listings
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