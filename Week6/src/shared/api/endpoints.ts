export const ENDPOINTS = {
  discover: "/discover/movie",
  detail: (movieId: number) => `/movie/${movieId}`,
  guestSession: "/authentication/guest_session/new",
  rating: (movieId: number) => `/movie/${movieId}/rating`,
  ratedMovies: (guestSessionId: string) => `/guest_session/${guestSessionId}/rated/movies`,
};
