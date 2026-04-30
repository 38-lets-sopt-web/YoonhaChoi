import Button from "../../../ui/button";
import Card from "../../../ui/card";
import LevelDropdown from "./level-dropdown";

const GameBoard = ({
  level,
  onLevelChange,
  totalCards,
  targetHole,
  targetType,
  isHit,
  startGame,
  stopGame,
  bonk,
}) => {
  const gridColsStyle = {
    1: "grid-cols-2",
    2: "grid-cols-3",
    3: "grid-cols-4",
  }[level];

  return (
    <div className="flex flex-col bg-yellow-100 w-full rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <LevelDropdown level={level} onLevelChange={onLevelChange} />
        <div className="flex gap-1.5">
          <Button variant="start" onClick={startGame}>
            시작
          </Button>
          <Button variant="stop" onClick={stopGame}>
            중지
          </Button>
        </div>
      </div>

      <div className={`grid ${gridColsStyle} gap-4 p-4`}>
        {Array.from({ length: totalCards }).map((_, index) => {
          let status = "hidden";

          if (index === targetHole) {
            if (isHit) {
              status = "hit";
            } else if (targetType === "otter-villain") {
              status = "villain";
            } else {
              status = "otter";
            }
          }

          return (
            <div key={index}>
              <Card type={status} onClick={() => bonk(index)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default GameBoard;
