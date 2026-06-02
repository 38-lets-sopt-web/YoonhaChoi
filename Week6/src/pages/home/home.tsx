import { useEffect, useRef, useState } from "react";
import Card from "./components/card";
import RatingFilter from "./components/rating-filter";
import { useDiscoverMovies } from "./hooks/use-discover-movies";
import { getTmdbImageUrl } from "../../shared/api/utils/image";

const Home = () => {
  const [rating, setRating] = useState<number>();
  const { data, fetchNextPage, hasNextPage } = useDiscoverMovies({
    voteGte: rating,
    voteLte: rating ? rating + 0.9 : undefined,
  });

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) fetchNextPage();
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasNextPage]);

  const movies = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <div className="grid gap-4">
      <h1 className="heading">Movie Explorer</h1>

      <RatingFilter rating={rating} onChange={setRating} />

      <div className="grid grid-cols-4 gap-6">
        {movies.map(({ id, title, poster_path, release_date, overview }) => (
          <Card
            key={id}
            id={id}
            title={title}
            posterUrl={getTmdbImageUrl(poster_path)}
            date={release_date}
            description={overview}
          />
        ))}
      </div>

      <div ref={ref} />
    </div>
  );
};

export default Home;
