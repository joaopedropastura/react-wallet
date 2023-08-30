import React, { useState } from "react";

export const PaymentContext = React.createContext()

export const PaymentProvider = ({ children }) => {   
    const [list, setList] = useState([])

    const addList = (params) => {
        setList(prev => [...prev, params])
    }

    return (
        <PaymentContext.Provider
            value={{
                list,
                addList
            }}
        >
            {children}
        </PaymentContext.Provider>
    )
}
