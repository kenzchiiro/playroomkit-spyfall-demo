import Card from './components/Card';

function App() {
  const players = [
    { isMyCard:true , name: "player 1", "place": "โรงเรียน", "role": "ผอ.", "isHost": true },
    { isMyCard:true , name: "player 2", "place": "โรงเรียน", "role": "นักเรียน", "isHost": false },
    { isMyCard:true , name: "player 3", "place": "", "role": "", "isHost": false },
  ]

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
            {players.map(player => {
                return <Card data={player} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
