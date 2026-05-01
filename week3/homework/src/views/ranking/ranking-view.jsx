import { useState, useEffect } from "react";
import Button from "../../ui/button";

const RankingView = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const loadRankings = () => {
      const records = JSON.parse(localStorage.getItem("otterRecords") || "[]");

      const sortedRecords = records.sort((a, b) => {
        if (b.level !== a.level) {
          return b.level - a.level;
        }

        return b.score - a.score;
      });

      setRankings(sortedRecords);
    };

    loadRankings();
  }, []);

  const handleReset = () => {
    if (window.confirm("정말 랭킹 기록을 초기화하시겠습니까?")) {
      localStorage.removeItem("otterRecords");
      setRankings([]);
    }
  };

  return (
    <div className="bg-yellow-100 w-full h-full rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-semibold">랭킹보드</p>
        <Button variant="stop" onClick={handleReset}>
          기록초기화
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto bg-white/50 rounded-lg">
        <table className="w-full text-center">
          <thead className="bg-yellow-200">
            <tr>
              <th className="py-3">순위</th>
              <th className="py-3">레벨</th>
              <th className="py-3">점수</th>
              <th className="py-3">기록 시각</th>
            </tr>
          </thead>
          <tbody>
            {rankings.length === 0 ? (
              <tr>
                <td colSpan="4" className="py-10">
                  아직 기록이 없습니다. 첫 번째 수달 사냥꾼이 되어보세요! 🦦
                </td>
              </tr>
            ) : (
              rankings.map((record, index) => (
                <tr key={index}>
                  <td className="py-3 ">{index + 1}</td>
                  <td className="py-3 ">Lv.{record.level}</td>
                  <td className="py-3 ">{record.score}점</td>
                  <td className="py-3 ">{record.clearTime}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RankingView;
