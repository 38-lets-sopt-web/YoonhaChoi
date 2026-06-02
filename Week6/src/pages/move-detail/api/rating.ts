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
