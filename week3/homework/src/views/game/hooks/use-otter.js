import { useState, useEffect } from "react";

export const useOtter = (isActive, totalCards) => {
  const [targetHole, setTargetHole] = useState(null);
  const [targetType, setTargetType] = useState(null);
  const [isHit, setIsHit] = useState(false);

  const [normalCount, setNormalCount] = useState(0);

  const resetOtter = () => {
    setTargetHole(null);
    setTargetType(null);
    setIsHit(false);
    setNormalCount(0);
  };

  useEffect(() => {
    if (!isActive) return;

    let showTimer = null;
    let hideTimer = null;

    const spawn = () => {
      setIsHit(false);

      setTargetHole((prevHole) => {
        let next;
        do {
          next = Math.floor(Math.random() * totalCards);
        } while (next === prevHole);
        return next;
      });

      setNormalCount((prevCount) => {
        const isVillainTurn = Math.random() < 0.3 || prevCount >= 3;

        if (isVillainTurn) {
          setTargetType("otter-villain");
          return 0;
        } else {
          setTargetType("otter");
          return prevCount + 1;
        }
      });
    };

    const playCycle = () => {
      spawn();

      hideTimer = setTimeout(() => {
        setTargetHole(null);
        const randomWaitTime = Math.floor(Math.random() * 800) + 200;
        showTimer = setTimeout(playCycle, randomWaitTime);
      }, 800);
    };

    playCycle();

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [isActive, totalCards]);

  return {
    targetHole,
    targetType,
    isHit,
    setIsHit,
    setTargetHole,
    resetOtter,
    normalCount,
  };
};
