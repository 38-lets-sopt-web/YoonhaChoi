export const QUERY_KEY = {
  MOVIE_LIST: ["MOVIE_LIST"] as const,
  MOVIE_DETAIL: (movieId: number) => ["MOVIE_DETAIL", movieId] as const,
  GUEST_SESSION: ["GUEST_SESSION"] as const,
  RATED_MOVIES: (guestSessionId: string) => ["RATED_MOVIES", guestSessionId] as const,
};
