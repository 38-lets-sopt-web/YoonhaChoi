import { useState } from "react";
import ScoreBoard from "./components/score-board";
import GameBoard from "./components/game-board";
import { useGameLogic } from "./hooks/use-game-logic";

const GameView = () => {
  const [level, setLevel] = useState(1);
  const gridCount = level + 1;
  const totalCards = gridCount * gridCount;

  const {
    score,
    successCount,
    failCount,
    message,
    timeLeft,
    isActive,
    targetHole,
    targetType,
    isHit,
    startGame,
    stopGame,
    bonk,
  } = useGameLogic(level, totalCards);

  return (
    <div className="flex gap-5 w-full h-full">
      <ScoreBoard
        timeLeft={timeLeft}
        score={score}
        successCount={successCount}
        failCount={failCount}
        message={message}
      />
      <GameBoard
        isActive={isActive}
        level={level}
        onLevelChange={setLevel}
        totalCards={totalCards}
        targetHole={targetHole}
        targetType={targetType}
        isHit={isHit}
        startGame={startGame}
        stopGame={stopGame}
        bonk={bonk}
      />
    </div>
  );
};

export default GameView;
