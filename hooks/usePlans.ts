import { useQuery } from "@tanstack/react-query";
import axios from "../lib/axios";

export interface Plan {
  id: number;
  name: string;
  price: number;
  // Add other fields as needed
}

const fetchPlans = async (): Promise<Plan[]> => {
  const res = await axios.get("/api/talent/plans");
  return res.data.data;
};

export const usePlans = () => {
  return useQuery<Plan[]>({
    queryKey: ["plans"],
    queryFn: fetchPlans,
  });
};
