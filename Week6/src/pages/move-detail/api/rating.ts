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

export const postRating = async (movieId: number, value: number, guestSessionId: string) => {
  const { data } = await instance.post(
    ENDPOINTS.rating(movieId),
    { value },
    { params: { guest_session_id: guestSessionId } },
  );
  return data;
};
