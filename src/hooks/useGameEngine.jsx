import React from 'react';
import { useEffect } from 'react';
import { randInt } from 'three/src/math/MathUtils.js';
import data from '../data.json';
import {
    isHost,
    useMultiplayerState,
    usePlayersList,
} from 'playroomkit';

const GameEngineContext = React.createContext();

export const GameEngineProvider = ({ children }) => {    
    // set state in game
    const [cards, setCards] = useMultiplayerState("cards", data.cards);
    const [cardsOwner, setCardsOwner] = useMultiplayerState("cardsOwner", []);
    const [state, setState] = useMultiplayerState("state", "");

    // collect players data from playroomkit
    const players = usePlayersList(true)
    players.sort((a, b) => a.id.localeCompare(b.id));

    // set state for export to others
    const gameState = {
        players,
        cards,
        cardsOwner,
    };


    const randomeCards = (players) => {
        // random spy by player index
        const randomSpyIndex = randInt(0, players.length - 1);

        // init empty card
        var card = {};
        // random place
        const randomPlaceIndex = randInt(0, cards.length - 1);
        const place = data[randomPlaceIndex].place

        // set card each player
        players.forEach((index, player) => {
          if (index===randomSpyIndex){
            card["palce"] = ""
            card[player.getProfile().name] = ""
          }else{
            card["palce"] = place
            const randomRoleIndex = randInt(0, place.roles.length - 1);
            card[player.getProfile().name] = place.role[randomRoleIndex]
          }
          setCardsOwner(card,true)
          player.setState("status","")
        });
        return
    }


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
