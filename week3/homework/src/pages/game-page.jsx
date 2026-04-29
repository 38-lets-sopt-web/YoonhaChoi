import Header from "../components/common/header";
import GameView from "../components/game/game-view";
import RankingView from "../components/ranking/ranking-view";
import { useState } from "react";

const GamePage = () => {
  const [mode, setMode] = useState("game");
  return (
    <div className="grid gap-7">
      <Header mode={mode} onTabChange={setMode} />
      {mode === "game" ? <GameView /> : <RankingView />}
    </div>
  );
};
export default GamePage;
