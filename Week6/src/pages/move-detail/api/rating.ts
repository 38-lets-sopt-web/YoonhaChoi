import { instance } from "../../../shared/api/instance";
import { ENDPOINTS } from "../../../shared/api/endpoints";

interface GuestSessionResponse {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
}

export const getGuestSession = async (): Promise<GuestSessionResponse> => {
  const { data } = await instance.get<GuestSessionResponse>(ENDPOINTS.guestSession);
  return data;
};

interface RatedMovie {
  id: number;
  rating: number;
}

interface RatedMoviesResponse {
  results: RatedMovie[];
}

export const getRatedMovies = async (guestSessionId: string): Promise<RatedMovie[]> => {
  const { data } = await instance.get<RatedMoviesResponse>(ENDPOINTS.ratedMovies(guestSessionId));
  return data.results;
};

export const postRating = async (movieId: number, value: number, guestSessionId: string) => {
  const { data } = await instance.post(
    ENDPOINTS.rating(movieId),
    { value },
    { params: { guest_session_id: guestSessionId } },
  );
  return data;
};
