import { Link } from "react-router-dom";
import InfoItem from "./components/info-item";

const MOCK_MOVIE = {
  title: "슈퍼 마리오 갤럭시",
  releaseDate: "2026.04.01",
  backdropUrl:
    "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
  posterUrl: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
  genres: ["가족", "코미디", "모험", "판타지", "애니메이션"],
  rating: "7.6 / 10",
  voteCount: "1,378",
  runtime: "1시간 39분",
  status: "Released",
};

function MovieDetail() {
  const {
    title,
    releaseDate,
    backdropUrl,
    posterUrl,
    genres,
    rating,
    voteCount,
    runtime,
    status,
  } = MOCK_MOVIE;

  return (
    <div>
      <Link to="/" className="label flex items-center gap-1 mb-4">
        ← 목록으로 돌아가기
      </Link>

      <div className="bg-white rounded-xl overflow-hidden">
        <img
          src={backdropUrl}
          alt=""
          className="w-full h-[35rem] object-cover"
        />

        <div className="flex gap-6 p-6">
          <img
            src={posterUrl}
            alt={`${title} 이미지`}
            className="w-[17rem] object-cover rounded-2xl"
          />

          <div className="flex flex-col gap-4">
            <p className="caption-disabled">{releaseDate}</p>
            <h1 className="heading">{title}</h1>

            <div className="flex gap-2">
              {genres.map((genre) => (
                <span
                  key={genre}
                  className="px-4 py-1 bg-gray-100 rounded-full caption"
                >
                  {genre}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <InfoItem label="평점" value={rating} />
              <InfoItem label="투표 수" value={voteCount} />
              <InfoItem label="상영 시간" value={runtime} />
              <InfoItem label="상태" value={status} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
