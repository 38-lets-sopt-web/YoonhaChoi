import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../../shared/api/query-keys";
import { getRatedMovies } from "../api/rating";

export const useExistingRating = (movieId: number, guestSessionId: string) => {
  return useQuery({
    queryKey: QUERY_KEY.RATED_MOVIES(guestSessionId || ""),
    queryFn: () => getRatedMovies(guestSessionId!),
    enabled: !!guestSessionId,
    select: (movies) => movies.find((m) => m.id === movieId)?.rating,
  });
};
