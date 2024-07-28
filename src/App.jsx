import Card from './components/Card';

function App() {
  const dataState = {
    player1 : { place: "โรงเรียน", role: "ผอ." },
    player2 : { place: "โรงเรียน", role: "นักเรียน" },
    player3 : { place: "", role: "" }
  }

  return (
    <div>
      <div className="h-fit w-full grid justify-items-end">
        <button
          className="btn btn-outline btn-green-100 btn-md m-4 border-4"
        >
          RESTART
        </button>
      </div>
      <div className="flex flex-col pattern-paper pattern-gray-100 pattern-bg-white pattern-size-20 pattern-opacity-100 h-svh">
        <div className="w-screen justify-center p-2 mt-16">
          <div className="w-full carousel carousel-center space-x-2 justify-center">
          {Object.keys(dataState).map(playerName => {
                return <Card owner={playerName} data={dataState[playerName]} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
