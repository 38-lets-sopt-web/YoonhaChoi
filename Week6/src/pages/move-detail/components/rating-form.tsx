import { useState } from "react";
import { useGuestSession } from "../hooks/use-guest-session";
import { useExistingRating } from "../hooks/use-rated-movies";
import { postRating } from "../api/rating";

interface RatingFormProps {
  movieId: number;
}

const RatingForm = ({ movieId }: RatingFormProps) => {
  const { data: guestSessionId } = useGuestSession();
  const { data: existingRating } = useExistingRating(movieId, guestSessionId);
  const [userRating, setUserRating] = useState<string>();

  const rating = userRating ?? (existingRating != null ? String(existingRating) : "");

  const parsed = parseFloat(rating);
  const isOutOfRange = !isNaN(parsed) && (parsed < 0.5 || parsed > 10);

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSave = async () => {
    if (!guestSessionId || isNaN(parsed) || isOutOfRange) return;
    await postRating(movieId, parsed, guestSessionId);
    setIsSuccess(true);
  };

  return (
    <div className="bg-white rounded-xl p-6 w-72 shrink-0 flex flex-col gap-4">
      <h2 className="label">별점 남기기</h2>
      <p className="caption-disabled">0.5 ~ 10.0</p>
      <input
        type="number"
        min={0.5}
        max={10}
        step={0.5}
        value={rating}
        onChange={(e) => setUserRating(e.target.value)}
        className="border border-gray-200 rounded-lg px-3 py-2 caption w-full"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          onClick={handleSave}
          disabled={!rating}
          className="flex-1 bg-black text-white rounded-lg p-1 disabled:opacity-50"
        >
          별점 저장
        </button>
        <button className="border border-gray-200 rounded-lg p-1">
          별점 삭제하기
        </button>
      </div>
      {isOutOfRange && (
        <p className="caption text-red-400">
          0.5 ~ 10.0 사이의 값을 입력해주세요.
        </p>
      )}
      {isSuccess && (
        <p className="caption text-gray-500">별점이 저장되었습니다.</p>
      )}
    </div>
  );
};

export default RatingForm;
