import Card from './components/Card';

function App() {
  const players = [{name:"player 1","word":"word 1"},{name:"player 2","word":"word 2"}]
  return (
    <div style={{ backgroundColor: "#FFFFFF"}}>
      <div className="flex flex-col pattern-paper pattern-gray-100 pattern-bg-white pattern-size-20 pattern-opacity-100 h-svh">
        <div className="w-screen justify-center p-2">
          <div className="h-fit mb-4 w-full grid justify-items-end">
            <button
              className="btn btn-outline btn-neutral btn-md m-4"
              >
              RESTART
            </button>
          </div>
          <div className="w-full carousel carousel-center space-x-2 justify-center">
            {players.map(player => {
                return <Card data={player}/>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
