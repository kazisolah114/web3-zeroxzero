import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({children}) => {
    const developerName = "Kazi Solayman"
    return(
        <UserContext.Provider value={{developerName}}>
            {children}
        </UserContext.Provider>
    )
}
