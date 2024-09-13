'use client'
import { createContext, useState, useContext, useReducer } from "react";
import json from '../data.json'
const AppContext = createContext()

export function AppWrapper({ children }) {
    const [state, setState] = useState({
        allListings: json.listings,
        filteredListings: json.listings,
    })

    return (
        <AppContext.Provider value={{ state }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}