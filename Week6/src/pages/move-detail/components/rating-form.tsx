const RatingForm = () => {
  return (
    <div className="bg-white rounded-xl p-6 w-72 shrink-0 flex flex-col gap-4">
      <h2 className="label">별점 남기기</h2>
      <p className="caption-disabled">0.5 ~ 10.0</p>
      <input
        type="number"
        min={0.5}
        max={10}
        className="border border-gray-200 rounded-lg px-3 py-2 caption w-full"
      />
      <div className="flex gap-2">
        <button className="flex-1 bg-black text-white rounded-lg p-1">
          별점 저장
        </button>
        <button className="border border-gray-200 rounded-lg p-1">
          별점 삭제하기
        </button>
      </div>
    </div>
  );
}

export default RatingForm;
