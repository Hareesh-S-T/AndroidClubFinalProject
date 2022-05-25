import React, { createContext, useContext, useState } from 'react';

const LoggedInContext = createContext();

export default function ContextProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState();

    return (
        <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn, token, setToken }}>
            {children}
        </LoggedInContext.Provider>
    )
}

export function useLoggedInContext() {
    return useContext(LoggedInContext);
}