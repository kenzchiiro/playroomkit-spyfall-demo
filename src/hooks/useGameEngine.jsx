import React from 'react';

const GameEngineContext = React.createContext();

export const GameEngineProvider = ({ children }) => {    
    const gameState = {};


    return (
        <GameEngineContext.Provider value={
            {
                ...gameState
            }
        }>
            {children}
        </GameEngineContext.Provider>
    );
};

export const useGameEngine = () => {
    const context = React.useContext(GameEngineContext);
    if (context === undefined) {
        throw new Error("useGameEngine must be use within a GameEngineProvider")
    }
    return context
};
