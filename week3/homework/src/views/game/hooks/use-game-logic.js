import { useState, useEffect, useRef } from "react";
import { useTimer } from "./use-timer";
import { useOtter } from "./use-otter";

const LIMIT_TIMES = { 1: 15, 2: 20, 3: 30 };

const MESSAGES = {
  IDLE: "수달 잡으러가자!",
  PLAYING: "수달을 잡아라!",
  HIT: "잡았다!",
  BOMB: "펑!",
};

const saveGameResult = (level, score) => {
  const existingRecords = JSON.parse(
    localStorage.getItem("otterRecords") || "[]",
  );
  const newRecord = {
    level,
    score,
    clearTime: new Date().toLocaleString("ko-KR"),
  };
  existingRecords.push(newRecord);
  localStorage.setItem("otterRecords", JSON.stringify(existingRecords));
};

export const useGameLogic = (level, totalCards) => {
  const [score, setScore] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [message, setMessage] = useState(MESSAGES.IDLE);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isSavedRef = useRef(false);

  const { timeLeft, isActive, startTimer, stopTimer } = useTimer(
    LIMIT_TIMES[level],
  );
  const { targetHole, targetType, isHit, setIsHit, setTargetHole, resetOtter } =
    useOtter(isActive, totalCards);

  const startGame = () => {
    isSavedRef.current = false;
    setMessage(MESSAGES.PLAYING);
    startTimer(LIMIT_TIMES[level]);
  };

  const stopGame = () => {
    stopTimer();
    resetOtter();
    setScore(0);
    setSuccessCount(0);
    setFailCount(0);
    setMessage(MESSAGES.IDLE);
  };

  const bonk = (index) => {
    if (!isActive || isHit || index !== targetHole) return;

    if (targetType === "otter") {
      setScore((prev) => prev + 1);
      setSuccessCount((prev) => prev + 1);
      setMessage(MESSAGES.HIT);
      setIsHit(true);
      setTimeout(() => setTargetHole(null), 600);
    } else {
      setScore((prev) => Math.max(0, prev - 1));
      setFailCount((prev) => prev + 1);
      setMessage(MESSAGES.BOMB);
      setTargetHole(null);
    }
  };

  useEffect(() => {
    let modalTimeoutId;
    let resetTimeoutId;

    if (timeLeft === 0 && !isActive && message !== MESSAGES.IDLE) {
      if (!isSavedRef.current) {
        isSavedRef.current = true;

        modalTimeoutId = setTimeout(() => {
          setIsModalOpen(true);
        }, 0);

        if (score > 0) {
          saveGameResult(level, score);
        }

        resetTimeoutId = setTimeout(() => {
          setIsModalOpen(false);
          setScore(0);
          setSuccessCount(0);
          setFailCount(0);
          setMessage(MESSAGES.IDLE);
          resetOtter();
        }, 3000);
      }
    }

    return () => {
      if (modalTimeoutId) clearTimeout(modalTimeoutId);
      if (resetTimeoutId) clearTimeout(resetTimeoutId);
    };
  }, [timeLeft, isActive, resetOtter, level, score, message]);

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
    isActive,
    isModalOpen,
  };
};
