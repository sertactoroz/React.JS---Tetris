import Menu from "/src/components/Menu";
import Tetris from "/src/components/Tetris";

import { useGameOver } from "/src/hooks/useGameOver";

const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => resetGameOver();

  return (
    <div className="Game">
      {gameOver ? (
          <Menu />
          ) : (
        <Tetris />
      )}
    </div>
  );
};

export default Game;
