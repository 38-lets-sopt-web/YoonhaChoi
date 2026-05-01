import { useState, useEffect } from "react";
import { useTimer } from "./use-timer";
import { useOtter } from "./use-otter";

const LIMIT_TIMES = { 1: 15, 2: 20, 3: 30 };

export const useGameLogic = (level, totalCards) => {
  const [score, setScore] = useState(0);

  const { timeLeft, isActive, startTimer, stopTimer } = useTimer(
    LIMIT_TIMES[level],
  );
  const { targetHole, targetType, isHit, setIsHit, setTargetHole, resetOtter } =
    useOtter(isActive, totalCards);

  const startGame = () => {
    setScore(0);
    startTimer(LIMIT_TIMES[level]);
  };

  const stopGame = () => {
    stopTimer();
    resetOtter();
  };

  const bonk = (index) => {
    if (!isActive || isHit || index !== targetHole) return;

    if (targetType === "otter") {
      setScore((prev) => prev + 1);
      setIsHit(true);
      setTimeout(() => setTargetHole(null), 600);
    } else {
      setScore((prev) => Math.max(0, prev - 1));
      setTargetHole(null);
    }
  };

  useEffect(() => {
    if (timeLeft === 0 && !isActive && score >= 0) {
      setTimeout(() => alert(`게임 종료뜨 최종 점수는 ${score}점`));
    }
  }, [timeLeft, isActive, score]);

  return {
    score,
    timeLeft: isActive ? timeLeft : LIMIT_TIMES[level],
    targetHole,
    targetType,
    isHit,
    startGame,
    stopGame,
    bonk,
  };
};
