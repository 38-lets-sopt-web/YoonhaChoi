import { useState, useEffect } from "react";
import ScoreBoard from "./components/score-board";
import GameBoard from "./components/game-board";

const LIMIT_TIMES = {
  1: 15,
  2: 20,
  3: 30,
};

const GameView = () => {
  const [level, setLevel] = useState(1);
  const [timeLeft, setTimeLeft] = useState(LIMIT_TIMES[1]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer = null;

    if (isActive) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isActive]);

  const handleLevelChange = (newLevel) => {
    setLevel(newLevel);
    setTimeLeft(LIMIT_TIMES[newLevel]);
  };

  const handleStart = () => {
    setTimeLeft(LIMIT_TIMES[level]);
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  return (
    <div className="flex gap-5 w-full h-full">
      <ScoreBoard timeLeft={timeLeft} />

      <GameBoard
        level={level}
        onLevelChange={handleLevelChange}
        onStart={handleStart}
        onStop={handleStop}
        isActive={isActive}
      />
    </div>
  );
};

export default GameView;
