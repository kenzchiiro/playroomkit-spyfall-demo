import Card from './components/Card';
import { isHost,myPlayer } from 'playroomkit';
import { useGameEngine } from './hooks/useGameEngine';

function App() {
  const { cardsOwner,restartGame } = useGameEngine();

  const myPlayerName = myPlayer().getProfile().name

  return (
    <div>
      <div className="h-fit w-full grid justify-items-end">
        <button
          disabled={!isHost()}
          className="btn btn-outline btn-green-100 btn-md m-4 border-4"
          onClick={() =>
            restartGame()
          }>        
          RESTART
        </button>
      </div>
      <div className="flex flex-col pattern-paper pattern-gray-100 pattern-bg-white pattern-size-20 pattern-opacity-100 h-svh">
        <div className="w-screen justify-center p-2 mt-16">
          <div className="w-full carousel carousel-center space-x-2 justify-center">
            {Object.keys(cardsOwner).map(playerName => {
              if (playerName===myPlayerName){
                return <Card owner={playerName} data={cardsOwner[playerName]} isHost={isHost()} />
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
