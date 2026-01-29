import { useQuery } from "@tanstack/react-query";
import axios from "../lib/axios";

interface UserData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  ai_tokens: number;
}

interface ApiResponse<T> {
  event: string;
  status: string;
  message: string;
  data: T;
  errors: Record<string, string[]> | null;
}

const fetchUserData = async (): Promise<UserData> => {
  const res = await axios.get<ApiResponse<UserData>>(
    "/api/talent/profile/userdata",
  );
  return res.data.data;
};

export const useUserData = () => {
  return useQuery<UserData>({
    queryKey: ["user-data"],
    queryFn: fetchUserData,
    staleTime: 1000 * 60 * 5,
  });
};
