import { Link, useParams } from "react-router-dom";
import { useMovieDetail } from "./hooks/use-movie-detail";
import { useGuestSession } from "./hooks/use-guest-session";
import { getTmdbImageUrl } from "../../shared/api/utils/image";
import InfoItem from "./components/info-item";
import MovieInfo from "./components/movie-info";
import RatingForm from "./components/rating-form";

const formatRuntime = (minutes: number) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h > 0 ? `${h}시간 ${m}분` : `${m}분`;
};

const formatCurrency = (amount: number) =>
  amount > 0 ? `$${amount.toLocaleString()}` : "-";

const MovieDetail = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const id = Number(movieId);
  const { data: movie } = useMovieDetail(id);
  useGuestSession();

  if (!movie) return null;

  return (
    <div className="grid gap-6">
      <Link to="/" className="label flex items-center gap-1 mt-10">
        ← 목록으로 돌아가기
      </Link>

      <div className="bg-white rounded-xl overflow-hidden">
        <img
          src={getTmdbImageUrl(movie.backdrop_path, "w780")}
          alt=""
          className="w-full h-[35rem] object-cover"
        />

        <div className="flex gap-6 p-6">
          <img
            src={getTmdbImageUrl(movie.poster_path)}
            alt={`${movie.title} 이미지`}
            className="w-[17rem] object-cover rounded-2xl"
          />

          <div className="flex flex-col gap-4 flex-1">
            <p className="caption-disabled">
              {movie.release_date.replaceAll("-", ".")}
            </p>
            <h1 className="heading">{movie.title}</h1>

            <div className="flex gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="px-4 py-1 bg-gray-100 rounded-full caption"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <InfoItem
                label="평점"
                value={`${movie.vote_average.toFixed(1)} / 10`}
              />
              <InfoItem
                label="투표 수"
                value={movie.vote_count.toLocaleString()}
              />
              <InfoItem
                label="상영 시간"
                value={formatRuntime(movie.runtime)}
              />
              <InfoItem label="상태" value={movie.status} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6">
        <h2 className="label mb-3">줄거리</h2>
        <p className="caption text-gray-700 leading-relaxed">
          {movie.overview}
        </p>
      </div>

      <div className="flex gap-6">
        <MovieInfo
          originalTitle={movie.original_title}
          originalLanguage={movie.original_language}
          productionCountries={movie.production_countries
            .map((c) => c.name)
            .join(", ")}
          spokenLanguages={movie.spoken_languages.map((l) => l.name).join(", ")}
          budget={formatCurrency(movie.budget)}
          revenue={formatCurrency(movie.revenue)}
        />

        <RatingForm movieId={id} />
      </div>
    </div>
  );
};

export default MovieDetail;
