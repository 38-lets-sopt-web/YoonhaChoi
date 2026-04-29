import Button from "../common/button";

const RankingView = () => {
  return (
    <div className="bg-yellow-100 w-full h-160 rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-semibold">랭킹보드</p>
        <Button variant="stop" onClick={() => {}}>
          기록초기화
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto bg-white/50 rounded-lg">
        <table className="w-full">
          <thead className="bg-yellow-200">
            <tr className="py-3">
              <th className="py-3">순위</th>
              <th className="py-3">레벨</th>
              <th className="py-3">점수</th>
              <th className="py-3">기록 시각</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default RankingView;
