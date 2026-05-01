import { useState, useEffect } from "react";
import { useTimer } from "./use-timer";
import { useOtter } from "./use-otter";

const LIMIT_TIMES = { 1: 15, 2: 20, 3: 30 };

export const useGameLogic = (level, totalCards) => {
  const [score, setScore] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [message, setMessage] = useState("수달 잡으러가자!");

  const { timeLeft, isActive, startTimer, stopTimer } = useTimer(
    LIMIT_TIMES[level],
  );
  const { targetHole, targetType, isHit, setIsHit, setTargetHole, resetOtter } =
    useOtter(isActive, totalCards);

  const startGame = () => {
    setMessage("수달을 잡아라!");
    startTimer(LIMIT_TIMES[level]);
  };

  const stopGame = () => {
    stopTimer();
    resetOtter();
    setScore(0);
    setSuccessCount(0);
    setFailCount(0);
    setMessage("수달 잡으러가자!");
  };

  const bonk = (index) => {
    if (!isActive || isHit || index !== targetHole) return;

    if (targetType === "otter") {
      setScore((prev) => prev + 1);
      setSuccessCount((prev) => prev + 1);
      setMessage("잡았다!");
      setIsHit(true);
      setTimeout(() => setTargetHole(null), 600);
    } else {
      setScore((prev) => Math.max(0, prev - 1));
      setFailCount((prev) => prev + 1);
      setMessage("펑!");
      setTargetHole(null);
    }
  };

  useEffect(() => {
    let timeoutId;

    if (timeLeft === 0 && !isActive && message !== "수달 잡으러가자!") {
      timeoutId = setTimeout(() => {
        alert(`게임 종료뜨 최종 점수는 ${score}점`);
        setScore(0);
        setSuccessCount(0);
        setFailCount(0);
        setMessage("수달 잡으러가자!");
        resetOtter();
      }, 10);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeLeft, isActive, score, message, resetOtter]);

  return {
    score,
    successCount,
    failCount,
    message,
    timeLeft: isActive ? timeLeft : LIMIT_TIMES[level],
    targetHole,
    targetType,
    isHit,
    startGame,
    stopGame,
    bonk,
  };
};
