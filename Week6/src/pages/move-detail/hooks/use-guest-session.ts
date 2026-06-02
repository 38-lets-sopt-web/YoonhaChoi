import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../../shared/api/query-keys";
import { getGuestSession } from "../api/rating";

export const useGuestSession = () => {
  return useQuery({
    queryKey: QUERY_KEY.GUEST_SESSION,
    queryFn: async () => {
      const raw = localStorage.getItem("guest_session");
      if (raw) {
        const { id, expiresAt } = JSON.parse(raw);
        if (Date.now() < expiresAt) return id;
      }

      const { guest_session_id, expires_at } = await getGuestSession();

      const expirationTimestamp = new Date(expires_at).getTime();

      localStorage.setItem(
        "guest_session",
        JSON.stringify({
          id: guest_session_id,
          expiresAt: expirationTimestamp,
        }),
      );

      return guest_session_id;
    },
    staleTime: Infinity,
  });
};
