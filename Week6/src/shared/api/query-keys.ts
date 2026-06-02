export const QUERY_KEY = {
  MOVIE_LIST: ["MOVIE_LIST"] as const,
  MOVIE_DETAIL: (movieId: number) => ["MOVIE_DETAIL", movieId] as const,
};
