import { useQuery } from "@tanstack/react-query";
import axios from "../lib/axios";

export interface EventAgenda {
  time: string;
  title: string;
}

export interface Event {
  uid: string;
  title: string;
  description: string;
  image: string;
  regular_price: number;
  member_price: number;
  starts_at: string;
  ends_at: string;
  timezone: string;
  location: string;
  city: string;
  max_spots?: number;
  spots_remaining: number;
  agenda: EventAgenda[];
  what_to_expect: string[];
  is_registered: boolean;
  event_types?: {
    uid: string;
    name: string;
    slug: string;
  }[];
}

export interface EventsResponse {
  events: {
    data: Event[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

interface UseEventsParams {
  filter?: string;
  city?: string;
  type?: string;
  search?: string;
  page?: number;
}

// Fetch all published events
const fetchEvents = async (
  params: UseEventsParams = {},
): Promise<EventsResponse> => {
  const res = await axios.get("/api/talent/events", { params });
  return res.data.data;
};

export const useEvents = (params: UseEventsParams = {}) => {
  return useQuery<EventsResponse>({
    queryKey: ["events", params],
    queryFn: () => fetchEvents(params),
  });
};

// Fetch all events the authenticated user has registered for
const fetchMyEvents = async (
  params: { filter?: string } = {},
): Promise<EventsResponse> => {
  const res = await axios.get("/api/talent/events/my-events", { params });
  return res.data.data;
};

export const useMyEvents = (params: { filter?: string } = {}) => {
  return useQuery<EventsResponse>({
    queryKey: ["my-events", params],
    queryFn: () => fetchMyEvents(params),
  });
};

// Fetch a single event by UID
export interface ShowEventResponse {
  event: Event;
}

const fetchEventByUid = async (uid: string): Promise<ShowEventResponse> => {
  const res = await axios.get(`/api/talent/events/${uid}`);
  return res.data.data;
};

export const useEvent = (uid: string, enabled = true) => {
  return useQuery<ShowEventResponse>({
    queryKey: ["event", uid],
    queryFn: () => fetchEventByUid(uid),
    enabled: !!uid && enabled,
  });
};
