import Button from "../../../ui/button";
import Card from "../../../ui/card";
import LevelDropdown from "./level-dropdown";

const GameBoard = ({ level, onLevelChange, onStart, onStop }) => {
  return (
    <div className="bg-yellow-100 w-full h-160 rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <LevelDropdown level={level} onLevelChange={onLevelChange} />
        <div className="flex gap-1.5">
          <Button variant="start" onClick={onStart}>
            시작
          </Button>
          <Button variant="stop" onClick={onStop}>
            중지
          </Button>
        </div>
      </div>
      <Card />
    </div>
  );
};
export default GameBoard;
