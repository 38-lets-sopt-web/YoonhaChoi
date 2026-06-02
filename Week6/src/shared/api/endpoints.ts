export const ENDPOINTS = {
  discover: "/discover/movie",
  detail: (movieId: number) => `/movie/${movieId}`,
  guestSession: "/authentication/guest_session/new",
};
