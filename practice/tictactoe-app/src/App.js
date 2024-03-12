import './App.css';
import Board from './Components/Board';

function App() {
  return (
    <div className='game'>
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">

      </div>
    </div>
  );
}

export default App;
