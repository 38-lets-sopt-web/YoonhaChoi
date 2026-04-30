import Button from "../../../ui/button";
import Card from "../../../ui/card";
import LevelDropdown from "./level-dropdown";

const GameBoard = ({ level, onLevelChange, onStart, onStop }) => {
  const gridColsStyle = {
    1: "grid-cols-2",
    2: "grid-cols-3",
    3: "grid-cols-4",
  }[level];

  const gridCount = level + 1;
  const totalCards = gridCount * gridCount;

  return (
    <div className="flex flex-col bg-yellow-100 w-full rounded-xl p-5">
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
      <div className={`grid ${gridColsStyle} gap-4  p-4 h-full`}>
        {Array.from({ length: totalCards }).map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};
export default GameBoard;
