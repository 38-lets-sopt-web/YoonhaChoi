import Card from "./components/card";
import { UseDiscoverMovies } from "./hooks/use-discover-movies";
import { getTmdbImageUrl } from "../../shared/api/utils/image";

function Home() {
  const { data: movies } = UseDiscoverMovies();

  return (
    <>
      <h1 className="heading mb-6">Movie Explorer</h1>

      <div className="grid grid-cols-4 gap-6">
        {movies?.map(({ id, title, poster_path, release_date, overview }) => (
          <Card
            key={id}
            title={title}
            posterUrl={getTmdbImageUrl(poster_path)}
            date={release_date}
            description={overview}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
