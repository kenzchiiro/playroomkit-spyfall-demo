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
    const [cardsOwner, setCardsOwner] = useMultiplayerState("cardsOwner", {});
    const [state, setState] = useMultiplayerState("state", "");

    // collect players data from playroomkit
    const players = usePlayersList(true)
    players.sort((a, b) => a.id.localeCompare(b.id));

    // set state for export to others
    const gameState = {
        players,
        cards,
        cardsOwner,
        state,
    };


    const randomCards = () => {
        // random spy by player index
        const randomSpyIndex = randInt(0, players.length - 1);

        // init empty card
        var owner = {};
        // random place
        const randomPlaceIndex = randInt(0, cards.length - 1);
        const place = cards[randomPlaceIndex].place

        // set card each player
        players.forEach((player, index) => {
          if (index===randomSpyIndex){
            owner[player.getProfile().name] = {"place":"","role":""}
          }else{
            const randomRoleIndex = randInt(0, cards[randomPlaceIndex].roles.length - 1);
            owner[player.getProfile().name] = {"place":place,"role":cards[randomPlaceIndex].roles[randomRoleIndex]}
          }
          setCardsOwner(owner,true)
          player.setState("status","")
        });
        return
    }

    const startGame = () => {
        const isStarted = state ==="started" ? true: false
        if (isHost()&&!isStarted) {
          setState("started",true)
          console.log("start game");
          randomCards(players);
          console.log("cardsOwner",cardsOwner)
         }
        return
    };


    const restartGame = () => {
        if (isHost()) {
            setState("started",true)
            console.log("restart game");
            randomCards(players);
        }
        return
    };


    useEffect(() => {
        startGame();
    }, []);

    return (
        <GameEngineContext.Provider value={
            {
                ...gameState,
                startGame,
                restartGame
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
