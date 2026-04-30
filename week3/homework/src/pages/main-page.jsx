import Header from "../ui/header";
import GameView from "../views/game/game-view";
import RankingView from "../views/ranking/ranking-view";
import { useState } from "react";

const MainPage = () => {
  const [mode, setMode] = useState("game");
  return (
    <div className="grid gap-7">
      <Header mode={mode} onTabChange={setMode} />
      {mode === "game" ? <GameView /> : <RankingView />}
    </div>
  );
};
export default MainPage;
