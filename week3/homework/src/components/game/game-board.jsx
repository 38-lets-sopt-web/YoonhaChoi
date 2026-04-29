import Button from "../common/button";
import LevelDropdown from "../common/level-dropdown";

const GameBoard = () => {
  return (
    <div className="bg-yellow-100 w-full rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <LevelDropdown />
        <div className="flex gap-1.5">
          <Button variant="start" onClick={() => {}}>
            시작
          </Button>
          <Button variant="stop" onClick={() => {}}>
            중지
          </Button>
        </div>
      </div>
    </div>
  );
};
export default GameBoard;
