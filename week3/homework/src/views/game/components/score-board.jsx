import StateBox from "./state-box";

const ScoreBoard = ({ timeLeft, score, successCount, failCount, message }) => {
  return (
    <aside className="grid gap-4">
      <StateBox title="남은 시간">{timeLeft}</StateBox>

      <StateBox title="총 점수">{score}</StateBox>

      <div className="flex gap-4">
        <StateBox title="성공">
          <span className="text-green-500">{successCount}</span>
        </StateBox>

        <StateBox title="실패">
          <span className="text-red-500">{failCount}</span>
        </StateBox>
      </div>

      <StateBox title="안내 메시지">{message}</StateBox>
    </aside>
  );
};

export default ScoreBoard;
