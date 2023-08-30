import React, { useState } from 'react';

export const CounterContext = React.createContext();
CounterContext.displayName = 'Counter';

export const CounterProvider = ({ children }) => {
    const [num, setNum] = useState(0);
    function handleDown() {
        setNum(num => num - 1)
    }
    function handleUp() {
        setNum(num => num + 1)
    }

    return (
        <CounterContext.Provider
            value={{
                num,
                setNum,
                handleDown,
                handleUp,
            }}
        >
            {children}
        </CounterContext.Provider>
    )
}