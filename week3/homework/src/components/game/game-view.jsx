import GameBoard from "./game-board";
import ScoreBoard from "./score-board";

const GameView = () => {
  return (
    <div className="flex gap-5">
      <ScoreBoard />
      <GameBoard />
    </div>
  );
};
export default GameView;
